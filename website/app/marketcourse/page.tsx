import { redirect } from "next/navigation";
import { lessons } from "./lessons";

export default function MarketCourseIndex() {
  redirect(`/marketcourse/${lessons[0].slug}`);
}
