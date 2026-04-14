import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  ContactInput,
  CreateProductInput,
  ProductFilter,
  UpdateProductInput,
} from "../types";
import { useAdminStore } from "./use-admin";

export function useProducts(filter: ProductFilter = {}) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["products", filter],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listProducts(filter);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProduct(id: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["product", id?.toString()],
    queryFn: async () => {
      if (!actor || id === undefined) return null;
      return actor.getProduct(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}

export function useCreateProduct() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const token = useAdminStore((s) => s.token);
  return useMutation({
    mutationFn: async (input: CreateProductInput) => {
      if (!actor) throw new Error("Not connected");
      if (!token) throw new Error("Not authenticated");
      return actor.addProduct(token, input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useUpdateProduct() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const token = useAdminStore((s) => s.token);
  return useMutation({
    mutationFn: async (input: UpdateProductInput) => {
      if (!actor) throw new Error("Not connected");
      if (!token) throw new Error("Not authenticated");
      return actor.updateProduct(token, input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useDeleteProduct() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const token = useAdminStore((s) => s.token);
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      if (!token) throw new Error("Not authenticated");
      return actor.deleteProduct(token, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useSubmitContact() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (input: ContactInput) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(input);
    },
  });
}

export function useContacts() {
  const { actor, isFetching } = useActor(createActor);
  const token = useAdminStore((s) => s.token);
  return useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      if (!actor || !token) return [];
      return actor.listContactSubmissions(token);
    },
    enabled: !!actor && !isFetching && !!token,
  });
}
