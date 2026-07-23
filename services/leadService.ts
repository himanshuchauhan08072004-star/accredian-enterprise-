import { AxiosError } from "axios";
import { apiClient } from "@/lib/apiClient";
import type { ApiResponse, LeadFormValues } from "@/types";

export async function submitLead(values: LeadFormValues): Promise<ApiResponse<{ id: string }>> {
  try {
    const { data } = await apiClient.post<ApiResponse<{ id: string }>>("/leads", values);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        (error.response?.data as ApiResponse<never> | undefined)?.error ??
        "Something went wrong. Please try again.";
      return { success: false, error: message };
    }
    return { success: false, error: "Unable to reach the server. Please try again." };
  }
}
