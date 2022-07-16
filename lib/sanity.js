import {
    createClient,
    createPreviewSubscriptionHook,
    // createImageUrlBuilder,
    // createPortableTextComponent,
  } from "next-sanity";

import createImageUrlBuilder from '@sanity/image-url'
import { PortableText as PortableTextComponent } from '@portabletext/react'

const config = {
    projectId: "3j9h9mzg",
    dataset: "production",
    apiVersion: "2022-07-15",
    useCdn: true,
}

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// export const PortableText = createPortableTextComponent({
//   ...config,
//   serializers: {},
// });

export const PortableText = (props) => <PortableTextComponent components={{
   ...config,
   serializers: {},
}} {...props} />