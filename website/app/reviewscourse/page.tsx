import { redirect } from "next/navigation";
import { lessons } from "./lessons";

export default function ReviewsCourseIndex() {
  redirect(`/reviewscourse/${lessons[0].slug}`);
}
