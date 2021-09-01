import { ThemingProps, HTMLChakraProps } from "@chakra-ui/system";
export interface TokenProps extends HTMLChakraProps<"span">, ThemingProps<"Token"> {
    value: string;
}
/**
 * Component used to display design tokens or variables.
 */
export declare const Token: import("@chakra-ui/system").ComponentWithAs<"span", TokenProps>;
