import { useMemo } from "react";
import { Contract } from "ethers";
import { getAddress } from "ethers";
import useRunners from "./useRunner";
import { TODO_ABI } from "../ABI/todo";

// export const useTodoContract = (withSigner = false) => {
//   const { readOnlyProvider, signer } = useRunners();

//   return useMemo(() => {
//     if (withSigner) {
//       if (!signer) return null;
//       return new Contract(
//         getAddress(_CONTRACT_ADDRESS),
//         TODO_ABI,
//         signer
//       );
//     }
//     return new Contract(
//       getAddress(_CONTRACT_ADDRESS),
//       TODO_ABI,
//       readOnlyProvider
//     );
//   }, [readOnlyProvider, signer, withSigner]);
// };

export const useTodoContract = (withSigner = false) => {
  const { readOnlyProvider, signer } = useRunners()
  const CA = _CONTRACT_ADDRESS

  return useMemo(() => {
    return new Contract(
      getAddress(CA),
      TODO_ABI,
      withSigner ? signer : readOnlyProvider
    )
  }, [])
}
