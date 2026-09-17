import { redirect } from "next/navigation";
import { lessons } from "./lessons";

export default function GeoCourseIndex() {
  redirect(`/geocourse/${lessons[0].slug}`);
}
