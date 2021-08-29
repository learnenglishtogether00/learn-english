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

export const filterTestByUpdatedDate = (data) => {
  const convertStringToDate = (dateStr) => {
    let [day, month, year] = dateStr.split("/");
    let formatDateStr = `${year}-${month}-${day}`;

    return new Date(formatDateStr);
  };

  const filterData = data.filter((item) => {
    const updateDate = convertStringToDate(item.updatedDate);
    return updateDate <= new Date();
  });

  return filterData;
};

const formatPdfURL = (pdfURL) => {
  return pdfURL.replace("/view?usp", "/preview?usp");
};

const formatFormURL = (formURL) => {
  return formURL.replace("/edit?usp=sharing", "/viewform?embedded=true");
};

export const formatTestData = (test) => {
  const FILTER_PDF_EXAM_KEYS = [
    "docURL",
    "answerKeyURL",
    "transcriptURL",
    "introURL",
    "answerDetailKeyURL",
    "listenDocURL",
  ];
  const FORM_KEY = "formURL";

  let formattedExam = { ...test };

  for (const key in test) {
    if (FILTER_PDF_EXAM_KEYS.includes(key)) {
      formattedExam[key] = formatPdfURL(test[key]);
    }

    if (key === FORM_KEY) {
      formattedExam[FORM_KEY] = formatFormURL(test[FORM_KEY]);
    }
  }

  return formattedExam;
};
