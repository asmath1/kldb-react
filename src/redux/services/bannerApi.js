// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const bannersApi = createApi({
//   reducerPath: 'bannersApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://livestock.cditproject.org/api/',
//   }),
//   endpoints: (builder) => ({
//     getBanners: builder.query({
//       query: () => 'banners',
//     }),
//     getServicesByCategory: builder.query({
//       query: (slug) => `services/category/${slug}`,
//     }),
//     getCounters: builder.query({
//       query: () => 'counters',
//     }),
//     getArticleBySlug: builder.query({
//       query: (slug) => `articles/${slug}`,
//     }),
//     getMenus: builder.query({
//       query: () => 'menus',
//     }),
//     getRTI: builder.query({
//       query: () => 'rti',
//     }),
//     getFooter: builder.query({
//       query: () => 'footer',
//     }),
//     getNotificationsByCategory: builder.query({
//       query: (slug) => `notifications/category/${slug}`,
//     }),
//     getGalleries: builder.query({
//       query: () => 'galleries',
//     }),
//     getGalleryBySlug: builder.query({
//       query: (slug) => `galleries/slug/${slug}`,
//     }),
//   }),
// })

// export const { useGetBannersQuery, useGetServicesByCategoryQuery, useGetCountersQuery, useGetArticleBySlugQuery, useGetMenusQuery, useGetRTIQuery, useGetFooterQuery, useGetNotificationsByCategoryQuery, useGetGalleriesQuery, useGetGalleryBySlugQuery } = bannersApi

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bannersApi = createApi({
  reducerPath: "bannersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://livestock.cditproject.org/api/",
  }),
  endpoints: (builder) => ({
    getBanners: builder.query({
      query: () => "banners",
    }),

    getServicesByCategory: builder.query({
      query: (slug) => `services/category/${slug}`,
    }),

    getCounters: builder.query({
      query: () => "counters",
    }),

    getArticleBySlug: builder.query({
      query: (slug) => `articles/${slug}`,
    }),

    getMenus: builder.query({
      query: () => "menus",
    }),

    getRTI: builder.query({
      query: () => "rti",
    }),

    getFooter: builder.query({
      query: () => "footer",
    }),

    getNotificationsByCategory: builder.query({
      query: (slug) => `notifications/category/${slug}`,
    }),

    getGalleries: builder.query({
      query: () => "galleries",
    }),

    getGalleryBySlug: builder.query({
      query: (slug) => `galleries/slug/${slug}`,
    }),

    getAdministrationDirectors: builder.query({
      query: () => "administration-directors",
    }),

    // ✅ ADD THIS NEW API
    getGovtOrders: builder.query({
      query: () => "documents/master/government-orders",
    }),
    getTenders: builder.query({
      query: () => "documents/master/tenders",
    }),
    getRecruitment: builder.query({
      query: () => "documents/master/recruitment",
    }),
    getBreedingScenario: builder.query({
      query: () => ({
        url: "https://livestock.cditproject.org/api/articles/breeding-scenario",
      }),
    }),
    getCalg: builder.query({
      query: () => "articles/calg",
    }),
    getImportantPersons: builder.query({
      query: () => "important-persons",
    }),
    getKeyPeopleContacts: builder.query({
      query: () => "key-people-contacts",
    }),
    getFinancialDocuments: builder.query({
      query: () => "documents/master/financial-information",
    }),
    getArticleSchemes: builder.query({
      query: () => "articles/schemes",
    }),
    getEmbryoTransfer: builder.query({
      query: () => "embryo-transfer-programme",
    }),
    getReportsAndPublications: builder.query({
      query: () => "reports-and-publications",
    }),
    getInfrastructure: builder.query({
      query: () => "articles/infrastructure",
    }),
    getTimelines: builder.query({
      query: () => "timelines",
    }),
    getAboutUs: builder.query({
      query: () => "articles/about-us-kldb",
    }),
    getAboutUsInfo: builder.query({
      query: () => "articles/about-us-info",
    }),
    getSireDirectory: builder.query({
      query: () => "siri-directoy",
    }),
    getTraining: builder.query({
      query: () => "articles/training",
    }),
    getRLFMC: builder.query({
      query: () => "articles/rlfmcs",
    }),
    getFodderDevelopment: builder.query({
      query: () => "fpdder-develpement",
    }),
    postVisitorCount: builder.mutation({
      query: () => ({ url: "track-visitor", method: "POST" }),
    }),
  }),
});

export const {
  useGetBannersQuery,
  useGetServicesByCategoryQuery,
  useGetCountersQuery,
  useGetArticleBySlugQuery,
  useGetMenusQuery,
  useGetRTIQuery,
  useGetFooterQuery,
  useGetNotificationsByCategoryQuery,
  useGetGalleriesQuery,
  useGetGalleryBySlugQuery,
  useGetAdministrationDirectorsQuery,
  useGetRecruitmentQuery,
  useGetTendersQuery,
  useGetGovtOrdersQuery,
  useGetBreedingScenarioQuery,
  useGetCalgQuery,
  useGetImportantPersonsQuery,
  useGetKeyPeopleContactsQuery,
  useGetFinancialDocumentsQuery,
  useGetArticleSchemesQuery,
  useGetEmbryoTransferQuery,
  useGetReportsAndPublicationsQuery,
  useGetInfrastructureQuery,
  useGetTimelinesQuery,
  useGetAboutUsQuery,
  useGetAboutUsInfoQuery,
  useGetSireDirectoryQuery,
  useGetTrainingQuery,
  useGetRLFMCQuery,
  useGetFodderDevelopmentQuery,
  usePostVisitorCountMutation,
} = bannersApi;
