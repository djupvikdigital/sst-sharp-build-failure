import path from 'path'

import responsiveImages from '@exact-realty/esbuild-plugin-responsive-images'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import Head from 'next/head'

export default function Home({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component />
    </>
  )
}

export const getStaticProps = async () => {
  const cwd = process.cwd()
  const source = `
import * as metaImage from 'respimg+file:./test-image.jpg?sizes=1280w'

<img srcSet={metaImage.sources[0][1]}/>
  `
  const outdir = path.join(cwd, 'public')
  const { code } = await bundleMDX({
    bundleDirectory: outdir,
    bundlePath: '/',
    cwd,
    esbuildOptions: (options) => {
      options.plugins = [
        responsiveImages(),
        ...(options.plugins ? options.plugins : []),
      ]
      return options
    },
    source,
  })
  return { props: { code }}
}
