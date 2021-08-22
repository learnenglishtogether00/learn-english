import { COMPLETE_TEST_STORAGE_KEY } from "../enums";
import { getItemLocalStorage } from "../helpers/localStorage";

export const checkIsTestComplete = (testId) => {
  const completeTestStr = getItemLocalStorage(COMPLETE_TEST_STORAGE_KEY);
  let completeTestIds = completeTestStr ? completeTestStr.split("/") : [];

  return Boolean(completeTestIds.find((id) => id === testId));
};

export const sortTestDataByDate = (data) => {
  const convertStringToDate = (dateStr) => {
    let [day, month, year] = dateStr.split("/");
    let formatDateStr = `${year}-${month}-${day}`;

    return new Date(formatDateStr);
  };

  return data
    ? data.sort((a, b) => {
        return convertStringToDate(a.updatedDate) <
          convertStringToDate(b.updatedDate)
          ? 1
          : convertStringToDate(b.updatedDate) <
            convertStringToDate(a.updatedDate)
          ? -1
          : 0;
      })
    : data;
};
