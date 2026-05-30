import { createLogoutResponse } from "@/lib/adminAuth";

export async function POST() {
  return createLogoutResponse();
}
