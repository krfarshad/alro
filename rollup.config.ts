import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";
import image from "@rollup/plugin-image";
export default {
  plugins: [
    image(),
    dynamicImportVars({
      // options
    }),
  ],
};
