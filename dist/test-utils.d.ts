import { ReactElement } from "react";
import { RenderOptions } from "@testing-library/react";
declare const customRender: (ui: ReactElement, options?: Pick<RenderOptions<typeof import("@testing-library/dom/types/queries"), HTMLElement>, "container" | "baseElement" | "hydrate" | "queries"> | undefined) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;
export * from "@testing-library/react";
export { customRender as render };
