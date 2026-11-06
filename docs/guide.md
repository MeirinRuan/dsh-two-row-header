# Install and maintain Two-row Header

English | [中文](guide.zh.md)

## Install and use

The declared DSH version is exactly `0.2.2-rc.1`. Other versions need separate validation because this plugin depends on DSH markup. Install the prebuilt `.tgz` from GitHub Releases with DSH Plugin Manager, or replace the download path and run:

```text
dsh plugin --profile web add <absolute-path-to-downloaded.tgz>
```

Use your intended profile name. The Desktop CLI requires opening Desktop once to initialize its profile, then fully quitting Desktop before plugin commands. Do not enable this public package alongside `@local/dsh-two-row-header`: they contribute the same styles. Disable or remove the old local bundle before enabling this one.

The plugin mounts a stylesheet through the existing header-utilities slot. It uses a grid to place the action area above utilities and the corner control. It does not recreate or move buttons, and does not add a row when the native header has no matching controls.

There are no configuration options. Disable the bundle to restore the native layout. To uninstall it from the example profile:

```text
dsh plugin --profile web remove dsh-two-row-header
```

## Compatibility and privacy

The selector uses :has(), public data attributes, and the header's parent-child structure. A third-party header replacement may not match. Two rows are the normal layout; a very narrow viewport or many buttons can produce more than two.

The styles inherit native typography and colors. No workspace names, paths, or conversation content are collected or sent by the plugin. Public examples and screenshots should use synthetic names and messages. Representative Chromium fixtures can check layout but do not establish compatibility with every live DSH page or third-party plugin.

## Develop and release

The browser entry is already source JavaScript; no compilation or dependency installation is needed. Node.js `^22.19.0 || >=24.0.0` and pnpm `11.28.5` can check syntax and create the npm-format runtime archive:

```text
pnpm run check
pnpm pack --out <external-output-directory>/dsh-two-row-header.tgz
```

Use an existing output directory outside the checkout. The [Host carrier](../index.js), [browser entry](../client-v2.js), [patch](../cordis.patch.yml), locales, icon, license, and documentation are included in the archive. Test against the target DSH version before extending `engines.dsh`.

Attach the archive to a versioned GitHub Release with the stable asset name `dsh-two-row-header.tgz`. The [prepared market entry](https://github.com/MeirinRuan/dsh-two-row-header/blob/main/market/MeirinRuan__dsh-two-row-header.yml) points at `releases/latest/download/` and can be submitted after the public repository is at least one day old. Add the `dsh-plugin` repository topic and follow the [directory contribution guide](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/contributing.md). npm publication is optional. Submit only the entry YAML to that directory repository; release publication does not itself list the plugin in dsh-market.
