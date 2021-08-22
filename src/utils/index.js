import { COMPLETE_TEST_STORAGE_KEY } from "../enums";
import { getItemLocalStorage } from "../helpers/localStorage";

export const checkIsTestComplete = (testId) => {
  const completeTestStr = getItemLocalStorage(COMPLETE_TEST_STORAGE_KEY);
  let completeTestIds = completeTestStr ? completeTestStr.split("/") : [];

  return Boolean(completeTestIds.find((id) => id === testId));
};
