import { useMutation } from "@tanstack/react-query";

import AuthServices from "./api";


export function useRegisterMutation() {
  return useMutation({
    mutationFn: (payload) => AuthServices.register(payload),
  });
}
