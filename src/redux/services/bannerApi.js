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
  useGetRecruitmentQuery,
  useGetTendersQuery,
  useGetGovtOrdersQuery,
  useGetBreedingScenarioQuery,
    useGetCalgQuery,
} = bannersApi;
