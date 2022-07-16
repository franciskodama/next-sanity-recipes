import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent
} from "next-sanity"

const config = {
    projectId: "3j9h9mzg",
    dataset: "production",
    apiVersion: "2022-07-15",
    useCdn: true,
}

export const sanityClient = createClient(config)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const urlFor = (source) =>  createImageUrlBuilder(config).image(source)

export const PortableText = createPortableTextComponent({
    ...config,
    seralizers: {},
})