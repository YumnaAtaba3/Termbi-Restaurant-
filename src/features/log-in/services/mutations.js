import { useMutation } from "@tanstack/react-query";

import AuthServices from "../../register/services/api";


export function useLoginMutation() {
  return useMutation({
    mutationFn: (payload) => AuthServices.login(payload),
  });
}