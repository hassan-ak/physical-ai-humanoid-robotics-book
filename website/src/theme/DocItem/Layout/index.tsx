import React from 'react';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemContent from '@theme/DocItem/Content';
import DocItemFooter from '@theme/DocItem/Footer';
import Heading from '@theme/Heading';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import ActionBar from '@site/src/components/ActionBar/ActionBar';

// This is a swizzled version of the default DocItem/Layout
// It injects the ActionBar component at the top of the content area
export default function DocItemLayout(props) {
  const {children} = props;
  const {metadata} = useDoc();

  return (
    <>
      <DocItemMetadata />
      <div className="row">
        <div className="col">
          {/* ActionBar component injected at the top of the content area */}
          <ActionBar
            title={metadata.title}
            slug={metadata.frontMatter.slug || metadata.unversionedId}
          />

          <main>
            <div className="padding-horiz--md">
              <DocItemContent>{children}</DocItemContent>
              <DocItemFooter />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}