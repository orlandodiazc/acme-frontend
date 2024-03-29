import { Link } from "@tanstack/react-router";
import Page from "./page";
import { buttonVariants } from "./ui/button";
import { FallbackProps } from "react-error-boundary";

export default function ErrorComponent({ error }: FallbackProps) {
  return (
    <Page title="Request Failed">
      <div className="text grid h-full place-content-center gap-3 text-center">
        <h1>Request Failed</h1>
        <p>{error.message}</p>
        <div className="m-auto">
          <Link to="/dashboard" className={buttonVariants()}>
            Go Home
          </Link>
        </div>
      </div>
    </Page>
  );
}
