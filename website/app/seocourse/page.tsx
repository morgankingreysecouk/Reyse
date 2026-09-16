import { redirect } from "next/navigation";
import { lessons } from "./lessons";

export default function SeoCourseIndex() {
  redirect(`/seocourse/${lessons[0].slug}`);
}
