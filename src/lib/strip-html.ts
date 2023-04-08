import { stripHtml as strip } from "string-strip-html";

export const stripHtml = (html) => strip(html).result;
