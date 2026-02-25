import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock nodemailer to avoid actual email sending during tests
vi.mock("nodemailer", () => ({
  default: {
    createTransport: vi.fn(() => ({
      sendMail: vi.fn().mockResolvedValue({ messageId: "test-id" }),
    })),
  },
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("accepts a valid contact form submission", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "John Doe",
      email: "john@example.com",
      phone: "+234 800 000 0000",
      projectType: "Website Development",
      budget: "₦500,000 – ₦1,500,000",
      message: "I need a professional website for my business.",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("sent");
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "John Doe",
        email: "not-an-email",
        phone: "",
        projectType: "Website Development",
        budget: "Under ₦500,000",
        message: "I need a website.",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with name too short", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "J",
        email: "john@example.com",
        phone: "",
        projectType: "Website Development",
        budget: "Under ₦500,000",
        message: "I need a website for my business.",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with message too short", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "John Doe",
        email: "john@example.com",
        phone: "",
        projectType: "Website Development",
        budget: "Under ₦500,000",
        message: "Short",
      })
    ).rejects.toThrow();
  });

  it("accepts submission without phone (optional field)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Jane Smith",
      email: "jane@example.com",
      projectType: "Mobile App (iOS/Android)",
      budget: "₦1,500,000 – ₦5,000,000",
      message: "We need a cross-platform mobile app for our business.",
    });

    expect(result.success).toBe(true);
  });
});
