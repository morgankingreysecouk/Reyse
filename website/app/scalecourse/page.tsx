import { redirect } from "next/navigation";
import { lessons } from "./lessons";

export default function ScaleCourseIndex() {
  redirect(`/scalecourse/${lessons[0].slug}`);
}
