// lib/dal/user.ts
import { apiClient } from '@/lib/apiClient';

export async function getUser(userId: string) {
  return apiClient('GET', `/users/${userId}`);
}

export async function createUser(data: { name: string; email: string }) {
  return apiClient('POST', `/users`, data);
}

export async function updateUser(
  userId: string,
  data: { name?: string; email?: string }
) {
  return apiClient('PUT', `/users/${userId}`, data);
}

export async function deleteUser(userId: string) {
  return apiClient('DELETE', `/users/${userId}`);
}
