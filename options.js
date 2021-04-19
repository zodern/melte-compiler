import { readFileSync } from 'fs';
import findUp from 'find-up';

let options;
const pkgPath = findUp.sync('package.json');

// Read compiler options from `package.json`. If the file doesn't exist, assume
// that a `meteor publish` is currently in progress.
if (pkgPath) {
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  options = pkg['svelte:compiler'];

  // Don't allow overriding the runtime package from the package.json
  // If it should be changed, the build plugin will configure it
  if (options.runtimePackage) {
    delete options.runtimePackage;
  }
} else {
  options = { isPublishing: true };
}

export default options;
