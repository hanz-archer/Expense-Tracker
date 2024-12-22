import dayjs from "dayjs";

export const formatDate = (date: Date) => {
    return dayjs(date).format("MM D, YYYY, h:mm A");
};