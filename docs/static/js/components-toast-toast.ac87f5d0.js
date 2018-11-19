(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/Toast/Toast.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),A=n.n(o),a=n("./node_modules/docz-core/node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./src/components/index.js"),g=n("./src/constants/index.js");function r(e,t){if(null==e)return{};var n,o,A=function(e,t){if(null==e)return{};var n,o,A={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(A[n]=e[n]);return A}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(A[n]=e[n])}return A}t.default=function(e){var t=e.components,n=r(e,["components"]);return A.a.createElement(a.MDXTag,{name:"wrapper",components:t},A.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"toast"}},"Toast"),A.a.createElement(a.MDXTag,{name:"h4",components:t,props:{id:"just-an-implementation-of-awesome-library-react-toastify-with-aphrodites-definitions"}},"Just an implementation of awesome library ",A.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"h4",props:{href:"https://github.com/fkhadra/react-toastify"}},A.a.createElement(a.MDXTag,{name:"strong",components:t,parentName:"a"},"React Toastify")),", with Aphrodite's definitions."),A.a.createElement(a.MDXTag,{name:"h4",components:t,props:{id:"so-its-just-consult-the-documentation-for-more-options"}},"So, it's just consult the ",A.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"h4",props:{href:"https://github.com/fkhadra/react-toastify"}},"documentation")," for more options."),A.a.createElement(a.MDXTag,{name:"pre",components:t},A.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import { Button, ToastsContainer, toast } from 'aphrodite-react';\n")),A.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),A.a.createElement(i.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAdg73CCJUCWSxKH8Ag4EcGhXDQDIlgiVD2HkN0TXaT04AEchASdah9DgQMBXtaD2GcexRUvS8ADkAH1nAaAAtS9nAIoi5RIyQyIo3RUXcNC6Kg9gQylYTTS1QMzEkqZjwAL2cAhEmxdhuHYYB1iiARnlQK52gABnYVMZiwdpDzrGZuxYedLIAFns9gADZ7Mc9YwFAgAxH1oESSz-GcQ5EUdTB2AABSEfgliIahKDgFzEQCusgpoZwIE0y52AARg8pz5FVINUHU9gAEE5gM9hoxg8gbCgdBIwIzkDLEZq4xkdhUT0mBuGALSdJGuB5F3etgDa6BOuCAAyZbxkSeZKGaBaOq67h9vlMBQhqvtUHadgAH4NkWyNox6q4dqW1B5DjfdZDMT8zFhDVjhgMAwigKY7t6_q60YBq1zrCxge4PrjKh-sjpOgZzDw1FtT-gGCGB-H6zx0dUNjXh2gACSXKAx2NOUGrwIRe26BTRGJz98YI9cLCRqUUYJ1EGlQVgMjgGAcfZ-s0YIHA0AFgQhaJ0nycp90abpl4Ga1XhmdFl6EdFznTp5ghnFCchETgOARYRvHxZwBkTfgc3RbxjX2gAdSRLpcnyed5K1KwUNRCAwESJZ3BCEZ4EibooAgDxMgEYOejyCIiEKgsi3xQ4ht0_TMEgVAXhRuBnac1mLBZ_Htady2jWOrmWXFvmgot0uDcl1Am-dgBNFY4nMPI1fNP3UMD5IWC6KUkiWQOoULaTnfLvHK_rXXa_18WXdcAR8_nZvS-tkZN-3lJYxAOCCCnuAg2JqY_AFvY-izkap-aVpoX744IHHggkn4Bf6yXiwK9kb139leAQQgBC71ZtbDIEDYzVydiAOqGB2DtkCMcSg8Ar7tDbK4bY3QhaoCFp7bomdo6x03gnaer9Z45giCQn2g9kLDyDh_L-SR2AWmmH4FKjt2B_wsAA9gosugED6OYeBLd4zvQQfWRgzDUToVAlhF0Ag-F4xsJgJKlAUhdDNneTeY00SMiES3MIER7AUyFmNf6UAhamNLsNbEY0YIRBmFcZ2HkACs9li7TggCkQgHjibeN8cTAiDi8Y7nXOohsZ8EIlgpgIPgIBdEwESPwPYqBLGxG2EY0BGN_qhEBjNWJFhClY1iVIeJ1BZpSJqeYKgSSUkeCgJKbYmTqA5J2Pk1CfNpb2LqS3Ro_NBZMlkXuBpQyqmx3YNEiZDZZnzKrsMuJ8EWRNOFCk22psi4gCyd0vJwBxZGztmbUpCyLCnN2VUyQUyqkNMSVs_gQ4BSUM6dk6OPTjmgMbpQC5qyLB_NufchZjBHmbOSfwA-W8CgfMOb01EG9YXzgBYC5FR8QXrNQEM1m4LsVPKhSAWBwp4VfKOeLS84DhRotWVSiBWKbi1L4VIGQuL-HriXlICGtZOS_hAOJSiWYaKSFUNgICZAdCgX0IYIw7BLxYAYo6YVNA7C8i-oqn6MFc5YxCHYR5hEqYejudik1TKzpVW-g6bVmNilTH8I0XQliMrdENe6USDQnVWJgJIT1XTvWBitYxHVdq9XsHYqEIggQBDBWFFEKYbriKegjVGjIsaBDxskCm6N6b42Bs1da36RTAZhoSm0xEwwOoZCEka0SZbJQwErbOSQ9aK2UCrQIfNSqbXFvtXYZw5AhAJFcK011SlRIDqHW00dkhJ3tunbALtWqi26odQotCGECAqOrYmkSnp12SHXUozC2FO2WoLcG21JaHXixre6_doDD2gMDPywV6lpJwFFVGDQwEpV6HAiAYw8qL2OiIVu1V7B1UuhA3K2tnp3BvNOnAD41ApKqqXQ6WD97KJJOQ--9D56lVYaTWJQdQRUAWnyEVPDqHwMyUIz9Yje7JCnhYK4C0ABHRk8IaNgY_S-pQAryJCq3Kqs1CFxPUCAlgSVugwIGAgkBhK7TXBpDVXyfOclGbjrNEqKq9EfraJmJYDa8Bx1DkoDMC0ul5i0SqmYIDGE0NoUgxpgzha7wAFVLCWF1FxZwlhO4ABkBJhoC8FgSu7jX4fo3aZd-pLzagaHVTiABFTzl5RQNFC1FkinocCehi3Z8EqAgPsXgLQHIm5qIQag-5qYd5hSzgLHBu5TWLjoDawIZr6BZJKvFCkYpm9x2egG0NgQkgxttLPSVxzVFsxTCg-QNpZtYIEuwGBdAdhGY4Gqwtoy64Zwxh6rjUutUYKtNONsJYmQWB5Bu20KMix2BeG6x1pYVGYAfezmZwihkJi2BwBZu4VUW6wCmJxJxZnDK6g8OoLYEt_D5BSKgFqSgmKBZC84b8JWW5AbvBTHYj9YCub4dPaMl2dgnbKewSHP3kMsEym05Ihl2iU-2IGQFtOofIdxOgYsFhWclSslZAApJz0u2s-GOaTpEVOORRTdggHkUnsjye3eV3YAAPlr9am1mga5V_tVnqBI3Ro_Ady53P6c4Fe7ORXd27CGUN3YAA1PKVSVvycAEI6dTVt-1gQDvNdt2W6EcoL5_Kcmp1bvGfvsQB7e0HpXKvXes_8qDwFkS2bVTx3K0Uj3MAK5T-psnzRoxCGOkXmPXP4_wET_bkvTV2gAA4M98Kl7IuARY2rNU-zXwFcRiHtCwLRRANO4885wHlQ2qd6ys4AJzt9j_WOvyGU6oDJgEwggv5QACYrLL655Pm30cXRb8CVMIXbeHKZ-P9bqaABtBLSWUvpcy9l5wOAAAazgAC6TUp29-eMG-F-O-lkqYh-DkJcwBeMZ-MAYBBAlke-N-OUsBlUE-9YscEo2w9mVuQ-3Q7QcANo4-K-Fga-0-oEBURU8-8oJUdkt-mB5BU-oBMA2-UwzekBR-wBFB8BiBzeKB3B9-a-z-iWyWaWGWWWAkP-_-gBTB-MrB7B7AnkUBaBsB9YfBbBl-EBqBMB9-GBZBL2ZouBuOgKIagMpBsBFBihl-u-7QHkqhd-x-vB2E_BrOqYqBThtePOohr-EhH-0hv-ABhkQB6hNh4B8oXiqheh6hmh7Bnkuh8hBhLcneLca-TUsO8OUoOASOASqOa-32U0OOuepc5OduHWA-qyoi4izU4KgeBYwABWOAAOyGwO00xO8AY0a-hEO4xRKRphrM1RW8tRU2w2jRBWLRQOw47RPOXRPOPRYgfR_8ZgneQGFSoaRmGQMQZmUGDSOA5hBARmTuluVspmeMlkHg2KahFgjOI6sA6AVwtiQsMRkK9YlkrypkiQ1xL29RDxRo8Qzxh2Teyh7Ae-XiMR7Obx_xdiX264n25xHuFUeBSmw4WxEAZmJmtmquexwOmJ0Olu64xgpgCMcqjyeJOA64pJ2KSw4oQs58TEbwKcogJJGmpx8wVwRmeJyGqIc4KQTkhJJglJTEwwxSOQEw3Qjy6Ctxo66AF0lJrJ9Y0p9xHJw4XJAe7a_JCMRJQp4oUYMsBI3Qlx5qnsBQIQ5g8QtAW80QbA3QkKFJJJTEWw1A6AlCSwGKBQSw9KwoSw1y9s8p64kKKplmapPJHpAxcygpDpzgIpHUBpa2xp6C5RXQsp_pCMSZ2QQZxmpmyGXgGp4Z2pDp9gsuKcRUOQjWSe8kJeqZeMLumZappuqaAgmpUSkZ-MpJgelZju7ArAm8EA1pIC8oqB7Mcquo0sIw_QtAdgnQJe50wOWxGSlsUGeMBeVeGZiUqp2Z6pUAzZ9YBZeMcq0ZbQsZ4p8ZCSiZhO2wcpLJ647OdZm5uZ25-ZrZ9YB5c-W0cZRpCE9QnmxCJ5DSRB7Ao-ewRwxB9p-5CpFgn2d5tmNsaIYZz0eBQaK6oaDSVUr6wmnwomaEvqXqLqOF_qLq0msm0qAGSmKmamqu9WjCiktaum74-mckuJ2Z5mw41m2Znuc2fGtWbmckME9guoQWuooogkuWBWkgYlRWnutUfqnyLqTU0YbRPUsMJx9YQxEiLKcArAC4fOEwY0xQAAJMAG0TbKnPIPZMUIRJsOwXpYZcZZ9mZVgBZTTgMijCkiVDgCVPwDTlgCQEQikoQLcA8JICMCFTgCMKmDgMKCkJIAfiLmJFpeIDTowIUIYVwCkszhkJ5SAPIWiO4HAEFBmikvGv0FgNGFZDgAAOxWQVXC4-QVUt6KDlVVU1VWR1UNUWhNXVW1X1WNWVVdWtU9UVUeTuU-QeQ1U-SKAWgVUeEeWph77eLcggDsqrKMBfzyF4xQ4uLrWlyQAJBXDGWQoxHqGIzQBQC6hZQvARQlRHXHVGinWijFKXDtAwACw_A9jfG3VZxCD4KIDtA_AugfW3U8mUD4IuxcATC_UlT-Q3XHXA34JBbYRxDuJs7wSA2w1ogg0wAI0ujqCUBoC_VMkZBo3qFw0wDnWSiXWIDXXbWCLZ5c5pX8BfypjM0-ReWGF4w6V4ApJ744Ai581WR75s2fVWWX5uU8381WQeRC23VYApJeLS3HWJBuWS3lWpg-R76C37LLLAGrUI400dFbXs07WnX7XTEoZJIw3qG7VnUXW6RU2W2wHW0PWwC_UvV0BOC9YO3AGk2_X_UwDE2wGk1g3854CQ3Q360bUY3w2I2zC_WfkB3e1R1Y3YS4343tCE2dpe336k3k3kCU3U1G20360M2CAI7M1q0WipgK3qGc3c280S2a360i2EBi31181S3ZWF2AXK3eI4Bq0a3V2wFK38AWglTi382N1d25VEIFVEBFXRAlVlWKDXWj2NVr1WSLVzLLX4xSApDb1SCaV73rifirFyp7augHGDiokijoml6oAyXOpCz7FXqHHTFyEIyBkOACVCVf4uwkwNCWCXgxHwlXBj0VSzZyqbE30YnMVQYP3epTHBnMUhEBntrCim1IMwWhnzjANz4YNZkwUNnRpIkQPsD6izBMRbq0CjjrmWZ31IWX3wMupoWCZvrzYirZpppxrRBZpm5cMZrRBEXaByYyqKaQPkU7E8X9ZahLB8XsM5i5Z0V9Y_RMVYm1rA5sW2bKOFqX0Oq5rRCWl3rER0UWhEMZAWiz3RAcVn3yOLYaa1ScMxrcNX7NSKUgyhFqUNj6M3DVrjGIN3ALFVQGEOZyrrElpHGq6OPePP29oRMoMIwTCDCVDOAwAuSZARCVgejfGYB51RBQApNpPRDCggmOTZO2DkiuCJB4msyWS0BYDvgxE9lQCMhc5XBWQkPVQomWZokwNYlQZRPOP-Ncnv1WwinEjoAFObxFOZOqP17YN8nrg5NvL5OpNTMZMgmzPclwU4OLPlPM7VP4z4MhnbMLMIxNMtOApHOblmNNkrHIlyoKoMSmnn05hQYMMv3hp8NOMCMEAsPKBsMqrYWtqNrtrNrAtNoZBCMgT_oKaAbiM7CqaSNxYOjaa0UqQMVKpQ7PYwT4KJAyg-i_Y6ZagWgwBpSnTaNTCbMsWWaaPwCBi1SvHO4wBcafzCw4L_CQp74fj3OgbOZ31UV8Xf3CVGN7r5aFa0b8Y8svOThTBCxQDNBLa0aJTlogsdryVuPKWhG1QeApDgugvVqGS4v4unhwDFB8Ji4qWrIeDtK6KF4WhCj5CnRtOi7sBRGi5eHLElGsxuuWvDLWs7C2tV72sZQFzUCgMi4utuseuCLhl4zC4WuhEtz-vbCBsYDBuOsozOuuti7Rs554zFB4F4y1STT3F6tquGRYsvgyAfgtR8Iz7UHdAlPRF8JxHaHyjNtev4xNF2X047msyM4VPJAgkGVGVm2QlXRs4XnnSWRoDwEWjs7tDyDFCW2c0IkjvGWQmrRX10NhXg34hXQKVm2rvu7tBR4lPxvi4ETLt8JRBYDB3FhXDrtHt7uXSuPPsh3sAntnuWQXuLvXuyLhFIHsBPs7vN0EAOX_t8JJk1PAe2VjuB5LuW1JnB55CPtwc7su4Qd9v4yvEtxXD8WCXCU4BBYNAADiJMlgnEpHrEncSHNrleKCUJxQ8Bm8FouiSu-g0YC-VkmAfJ7AhlkK0YBHP9OAzg-ouoAA0peJyM0ZQDpLyXdOjgJ2g5AsJ0R2J5J9J_sZvPgqjh5DJxEPJwUIp5yP-0m_R4Xg28gRG6VBGzlHwghvGpm7B8ADq2W7OIRDgAvnYBKMQmgHnKrJB7IiRLMHgPayqxC52lcIm6XMm6mzkEx8p0kkJ0K1_iR-R5R9R5eJ3DJ9HJfnQNGC3gZ3Jyc4p2Z4CnFwxxM6nNZxa7-5bUIvIMUYdhODUZIqXIwCW9kO59WstkjuxAS3paF-Fw2pF_x6Ozu312bAN6eOwDrh7ku7SsMhN3cB8O1E9NnlIF1-gD1wIEMsUafewGE1MFA9sXfbtzE1jHE765CY8QCbCQjGB1cAfjEbWewOVHCfTtF0oHc6Q6d7fVYLAxphd1S_E3jLd9uwQ_Xg-TEau1c4Q18zEU95D_WYj0CY7vD_Xjc8Az9hsxuTBZQHDgjh0yE8Bk897NK6ru872sq6N_qwIH80JhJLY5-nOsOjOmzwuoBJoDJsIyRbC2RQixRXVlpr7Gi-aBSx0TkOL1KCS2SyjNY7y3Rvy7xWQ2IW_pIZ_iKx6GK5RFxbFp0webjy7JkHMNWoq2BpQyNOgCb7MHCE1JW-0NW5yIe3QyDLWwjN22bTzthw66GxZMpG0jEALPZwjC5D2AUMhDMFCe0MLuHWH65AUI1kykQD-x2yAZvOZKKEoSU6Pen_WKZOZEFn9Bwbn3H9AeGe0MtIgIEAVV9tX64GAJae0NF3wiIzmJFPsvwMTX706_KCOnAO2uEP7ZbW4oc-28TV4CnxYJZFZMTauzP3QT4hXwjD9521XzX39MKP7a37IrAE3203RwG1V5ZCxwIGxxrpx_Qv0JfjdikNa9GGCeCaCV4s_0_0sCVD1G63fw_-_y_2_6_yWAb12ALeMXJyG-Jr91wG_Rvs3134twb-QSdgO0yg4Wcq8p_bCKx3Y4sAr-Y4BAfSTMi_9AB__JYH_2AFi4f-rgR_kQL_5_9P-2bUXOAJiKQCEYVfG2IOnnR3EYAFoC0KPhb6-s8YG_Wvtv0UAN8m-RNOAYPn54lM0ABceIMTTX6LxsOvhcQu_ikJf4giEg1mIXzQDZ8227QC0Afnj4txtBqAYvk31z6GCV-fCVgXAHYHs9YA3A0fJvzr4iC2BU6TgY4PuAwDxB_As7FIM77CIQA8gzlCsWjw8ttuTEOwVAFVzFsfsEzKIZwId5xCq2bAGtqEV-AZAwAFMMYCU3MSUBviGQgQFkNGCdwSmmiTAGdFh42BaAzgLKMVD-qjBTe3xOpgQDqh5dzAlkREHoEzqV83BHA0dJxE4iqwSCvgm4ns0qYztUAc7BdpbRMFNtbORg0uNLBiBxAoAbQvIpZBTg9hF0TApQS_hUGa9Ai_-TQfjBaHrCUcp_EvqHxbgkRbB7ggYUMNoAjCYurMDfpABliWgtotLPgS8OGQmCzBQHdoJYITqCIs68oavitktCPQfh8hEwboMQFAj8-qyBQZLk5QVRmupWGxoC04CyslwCrexitn7QJDR0MIepnQC2zUUJYlPUInuX3LKosKPsPUsOQgrThyRx2UYSWEt4wQ2iQkWgi0VzbnZrou0YIH9kh5wBC2pcTxu1xWrbdbeZvI4FNzgAzdRowAV3qt0VHKi5uuudoBbndxqjkM1AJIL_lfbnQ7h_QhwTwNoglMPwS3LnJ1ziGc9OB29LnPNHW6Rg6aHXWdA6OJGwBnRciL0dbzlFwht6f8bWId0eY_RKebzEDJfUdGjpGeALLCp-gPRHpN026AQFCz_TyZZUiUCRir2kaDwZe9FZFrKziFEtzQcvEQArwxbLp10aY09NrwVAVjxYI8KSkq0ZasiWWXQF8DEFQCJBOW3LUhl13zE_QmxsvFsUHFIxmwWMKiNgWbEV5OZlelFVXmp2cBLB9hGvAImuKYgsQ2I_mPiDlhGy69JKUrWxjEKVapjlEDYwyPqMAIdF7gRkQiE13caoNLePOJqD2ymhajHxEoiwLVBpiXiT0qiJIdbxSGsA0hfCJoj7z4SaQ-YagRftGCnywTv034-NhvUtq99nOiEm3JhJZDzd2gkAGoL1k5Cj9LM4_aMDZhgDvkp8Y_Y3PKHmbnQroNEsidZyjyW08BUJCiaZmok24OJdEogic0Yn3iIwShViQ5BImxt6wJEddCPEGHiwLQcmdMTCKty4SA-CoIPjaRBGjho-CJdoHkK0kcTF-ek8IPkLBEL9z2dnMERvnvah15QHhJEcMnD5uQFwh_DvNhwEE4AZJQcOSc-hOHGDM-aAGDtZCQELCV-XOJyaaV0klRl-73KAqVBinAiwRlXQvEZIIGUCaB1AogeVQXxeJGBNOaoNGW7CjAY-NkGyF5B8BpTowHkPfEsGqm1SapSAnAGCTylW5kOJeTyIsNWSAcY-URTqX8NcB3sX2MfeyX1JbjmSoplkySazBnyhQU4SQSYZsAnJaSZ8bseIpERFzLSqCc-c9n5DCmApW2CIxKVNPxj9wBAKTWAFKEsh-1rhgKKvtwIOLKTYCn9VcTgDvBBY6o9gCTmCOYFc5pJoCWSZxGWwup52VxPyYClUmWQB-Q_WgFpKthkTdJqw8gNGB9ZcJop9kFqbAUMkWTRpgKcyRAQclc4wORkrgntPvwRTvYrkwwnMPmHe56s0kWGfWEswU1dIIJAuvIVeK1NMgRCNJvoAZl_i-gg_TJqezxrdCbp9-fYPAXH7IDDC0HKWWCPB6B4UOD49oG6z5kvZUBjHTmXlR5k0A1ZBUvwCcByElNrp7kwFGcPaGdD9ARNU2aslxAJBLAXM_KnGguIazns1QSjAbNGBqzp6GbFkEZOSlV52ATUrxHYDP5LB3ZcAT2WMGDmhyMBPQztr9Or7DBpYj026gHIwCWRKpdU97g1OznlUrIuUtWT9OALQCuYAsEQYgCCi9Ax8HIrnPrKKljBJhdJUqN5Cho-Byp04e_pQOzk9yGp5VaKRjLTmuzM5XcqqbnPHlACPKhc-Wf_BtnDJBBW_LoKnOOoQz--HgQfs0xhkzzWY7fKYJ3wADr3fbefjDxl0FJpXdAdszhKYzD9auHEEi9LekfSvpx0rnPW22liS1ZcBVwloQRElRdpn8sWBtnOEdD5QXQ5vsfJRHIi55HkryYkEGEWY0kZsedpvGXnH4iZMfPfDjKtbDyv6hHL_I_M-nfToFUk5aJ5P-neTOI8kyjMbF2SoKucz01LqJ08z2B7AAkNcS_NLh_SWEcCwGd6hBnmpuBOye2M4O350LgCDCvBUwpYVsKIFxC14WQu4XwKhAiCuAMgvP7UKzkNc34XXJwUvTnAzC1hc4HYWGEPRoIjhRYFYGwKfJqEbgf53yFgzVkEikTg0HYjBRdQci_GFwoDgUKgZQsfhQhFsXtxKAIipeQ4uPxOKiOLitxbIvMWeKFF3inhQgr0SqLrW6iuxWIvvzpy_iL0qJe4qSI05i5qySxeQp4VUKYUR8DJcMgiW_06ooodiC4tI4eKYFJSwYb4q4GflqA3A8pQUBCU79a5kgpJPh0YUuxal9S9iI0qSJNKpJ8SmIBQqSX2w1FXSw-AUEqU6Lj-heIZZIpGV1KGlECgpR4uKWKLKFoCbgSSii79Kd5KnTZSJ0yyighKUyixTMoBltL_FnSkltSkrBCDQlFyqpVctwU3LRQdy0UDEoTm3Snlcy5RcksWXvKIEqyirrosYW3L7l-Sq3IUvnmkKrFxymxRaClhjI4VlypJOPxel_0AGQDeQlkpHkP9vEtU5_tSsak5SWp8hLxbMp4UvKOlZ0MJYnMQDJyfB2i4AhStNCjze59UyedPP1porYCpc4PvX0rmnA8g-K4_PXMNnSCiEE4FuT4DbnvdvIBAseSKpzmDzPqFgAVZ0CFUTyc5oqg1eoQlUlzq-XyvpXyvvzVKcAJKwBsfMUGTLYlzSo5fMqQWpKFV5ndZWgP-VEcXVZKkxfsrcnHTlBm4tQcR0sCid9Qf-TlfWDh5nyxcWksfkZP0lgiOJlMuuSIGTh5r9pJfRftLJpzMqAZ8kxSaen9Vix4ZWakyWrMMlFrMlBak0C2uPz79S-Ha8KYn3chICHlhYIaRZPTXHzrJe7NPqOojWgr5FmK8WLWosDUyES0s2AuTIXC6TLBsU7yJuqOkyzvAhU5VUZNKmglvINkLOWarzlNTLV-apPErJ7WojZEkC7qL-NZFiJhi0onegBNATHot0DYjUYN34DDdxYqi6taokySzEVuWzKaLaI651irxYGwwn4zaKmKcO3qXUJ8lyRjQDqaGjDUTnm5PEYAKG7WnikkBfrUIP69MftyCYlZqeuqQCb-tUQJiMKLPJ9KhFY2ohMxu8nMcpiF5ItNMBYmiu6iUY1jC0t6RRsSwnFfE8C1sXFTLG6A3jd5zeRyGKMALPjNWLXN9ajFATRhd5sjSCQVjaKW1_1p4SyHOpOU4rRkcmiAQd2k2gJbc5aXYP9js2yahYiFGMR83FhMbme-vT9I537JEIUMPmiVHzxhbca8xy47tOwCNaZATWjYkxqSyrHUBFeyCRDNzFCjxQ-Y7ATzNHwt6oh_imAPmNlqajRaCWprdcAmz4RMy86LMkElZFzY-zZ6VwH2UHxgCphnw7TdgBVS8Si4gBSxGNgjAvYciqtl1RfiVHq2OzGt7AP2k4W1gFtSGKWpziyASjFJohRW3LZSxW1FbDW6SY1vADNYIwKtsiBrc7KGirCYAncMqh5T60551wYJF1r8OO0Zorgtg-IOdujCf8Zt4ZH1g9om0naXtsAC7dlNymfbO2g2n7XlUm3_a3tH2kIagDm3VQkK_4-pfqDqiWAGgfmQSGD3rDBQ6o2oS8JxBcWcRPMCUMJX5r74jt_oBW1ANlsIhNUQ5MISkOVzMWdsEonmILEFiJ0k6ORdsqAPYD8DzhG2MfR7UQAtDCgAkaAYmmTu5jj912m2mYLTsqr07fOMAJnacN-0ZpdQN_fGutJdb1c0RKxMwOhW818scMwoXjHy2C3QtsxYjR0ISoMTEJ1ttOVcSM3rAEKJOlKqqbSq92MDAUjwdgAAGI982oIPUHvXChqPdGUgAdPLxySAA9wUePQnvDIacpOEejyA1VBJp6SBaen3aXD93-7goLeAvQXvDJZdO43EcTinsFUeBH-HhEgbXtBIeEc9cyWPf7rYht7Lw4ZdLhRyo40cI9YDUEtFJIElQKqTevPdqA8jagKq2oBfOuFL1BSdV0Uiqh_x8gTVSo01UfS3oXzag6oPkXHeuG32igJOPe7LiUwX0a0P-KBD_szQ30B6KqdUUAS3nlqdtO4l4dnbqBdjz77-VA5_iVAXzp7ICN-_PcFHsA-QSoHehGEJTqjjLLwn-6vWCQal_zUwH_EfcposB57gDdUVMCVE8oQHRQUB0jvjtYjahUpX-2gcNSWCgDAD8elvNqCiLrgiDwyVPddVdbMGvEqYJvc3rj30FmaT-vGFlw4ilwPdC-Car_oaot4F8HBtAy3p8hWQQDXiGfQjDekZY8OVepeqVB8hv9f9HBvPSLjqheJtQd4dcKztFAJQQssB97RVQQNWR09JUFvPp1QN56PpPkewHeBbzrgu9lHBKC4ok4kG4Dme0qJAQ_52Gc96BlvC3j3yuHfuhvMnoxg0yI6lWzumHET2yK5EUcaOJYJxFXF6aEYCULLCjtFClCQSmRxhUobDV4xnAl4fiuxAP2dwrgxRyRZAegPYckVooBEvUZE5EGYi2ysZaR0X7tGiOL-t_S7BiL6LpFRivoy9P4PsQYiuStow_KCwZZsOLigAGqZYKjEx4Zf_VdWhCvNevE3XcPIyUZU45u5XpbqzGiM4WkQroMEAbZ2AFKEAGoHYh6jRilUxbXcRxG4gHjMdvrX_FcFTDyGRj-oK4BVR8gNV1w-obUOG3moxEgspHUBigRXX1hv8QWUBh5AcIdMjdex5XixmyB9lOM3GW-oFot2aBiKoWm3YuI_QRbl0zEViB8Z4j8QRKI2SQIr31C4nXA7AVLASb43xHLeG4_wmoJd0WBcjLiywJZAAACrGPslfTQANNwy3-X48BwlNsnmot7C0JzSuCGUaTe4z4wyZkKcJSoDlUzjEWNGPslTbGFU2gDVMTrxuWpuk18ZkKGmzSOQaMKqfVM2n3j-43U2J31MlRDTqu706aclPsmXTlpt05qY9M6npCYnR05UBVMDSrTIdDU8AFtOenpCEJn036ZiLpnAzypkMxRjDPJmIz9JtM9qBjMoIXT8ZgsymcjNpdejqMzM-4d6M5nzTeZhMxDXdO0nUztZss86ddPWnwznZmsz_iCwZn0Zqu5E8OzNNSnWzVZos_aeRMNnO2furHIJEsAkwoD7h0UxyIVPFApzwZvs4mY7Paniz6gwSPWbHOW0xOzZ6cwefbMDnjz9p70-eawBGm-EEJ68_ucrP9nCzg5k8zgHTPPnXzsiWEx-bjNYA2ztk-83ad1OwnRzL51XWir91ZdUdmWKwOufYiz6tzvwk04qaDMWn8z356s3-d_yLmW4AZ3C7mY3wQWkzRFx8_qFIulxszFFls1RdnO_n7TEJhi6zFgugWZzhFuczBdI5cX8YE53i6xf4vsXdTC5i8_roQqG7WGzGwFp-gaRYmP0X6NQGca4026IxDoR5BSe4oaoiMTJ9lcOKJPK8BM_zRS0mMkylZyyPWLrD1k4388wtvGkcSizF5Cb0WJYqXuWNl4JbyWVUBlipyahdAuxbLXsf2JU5csMRnFPllScLTO7RKuvCShKwIxDiyxju7bo8grbJCUa5qGtjyOUoe88YXvHdtBM7ZJlHAgyt9pN2CtXRVxj-A6ip1k7Za4Q9gSkHdAALXKiOwp_IzlxeLBXyJTVwlfVdS6NWzadpCIK1YyDtXZYnILq8Gq_y9Xal_Vm8q7JKY-ydZsp9fknMKEVyq592BvmXPtVQdA8VV9BoSn1Hm1imo1vBeNdqtJIWr8o2a8LHmv3zGFy1gozJxdICBdOd0WTkZx3gSTZEd8qEoJ2Gs3XFr919Uc1amvPWOrb17q0tbyMrXvrOnArsV0BvHxgb7qna4gCVLZBKlvQGWMU10k_BLQ8QbIYTaM2DWESkxmjkhzOt_L6b2XXYaEJitYiGRLxn6JfUVGwRfipIzbNti1C7YzxHjNkZAkqL4wpRSVLKwSj8aTFkNfo1mMckJD-M8MbougChq25xDQULca7WGPkuWXmeSlmy5NhgCDZps5ty25vCctknLjPG7YIizcuahCxnliXiJtLHW9fLlofy9WLUjtjgrTLMKz2I5ZRXBx0R_Sy5hF6RbErR48SseNSsG9SeEQzK7rYJQ5XQJeVhCAVbfpFXQipV1buVdQaEqhrE14K1uwhtHBvcB0doCMGqH-1X2xKrYzAaRuvT3pn0nG1gXWtXArrrxW6z_Whs0ZHrcNtqwjYWsvTPrq1tMkzeqt926rUNqu09bHtzWJ7H1lG19ew4b8eVTZavgdbgAVzzQmksJZVb-Xg3y7I1xexfeFDL2Zr49965Iqnto3frBXXKQDdK5d3WYWSkEufYeuQ2GrS90e3fdXsP2ROT97Ti_dRxv3DOH9tm3jYJu9YwlxNwWePwaEU2Egowam231ptQkWbtHFAYGpQRt2PDx-_B7IlPvVWXpJD0vXA6a4c36RNWOxoZZ5sfM-boxI4BtnJHC3zQot7EeLb1JQJpbrXd9bLfTvGkFbatpW_IVVuA4Dqmt56ElQDH3E9bpcA2wbtQCYnMKjD5S6aiKySATLNuIrJpecs27Hkw4qniBlqheYfMfmbiJjlCxY6xhTOCYfKFnbYR52U7WHkNMhmNqYicwjtWutn6gkO2AZAWcU3eIizwF4ZCWdhA7XQcf23kDeVwDFlGgtpNBHaX1JWk_ygOURMtQjHHWHnY-DhePjeUVntT98y_FJy0IdkQ6Tt7QUIPKIIIpPTp50hHFdOohVPHZ_vF2YQ5yBTzY5LoTeOHMDwKTgr_T9gGHPGAbYPZDcoOdFIGcSgmyhKOZ_TrP4pPt7e1ve3KoPtHXpVFchB5UpicugO1a_AwvyiyhO20gQEagKSet0gBTs_AVAAS34AeIpU5QEEN4HMb_hyQTIEADAX4AuVqALzwIfnN5q8I6w_AcoIOggAzBTowL_gHVCGj0QSc3zknJgHJCUBEgBYPIKaRMZAhxmoINRH8_WD8AogaAeFyoG_RARwXgCEAOi7ZE1Rb6wL0IozXVhIBAhAAPT_k4AvETUml8vBAAaNKJeyV51y95c-Q-XxLnWKXQrE3MLGzjClxy48i80cAHdGIvwD9tAv2X_ADlwviakeVNa6rmV35fl5avRXernmmPX5e0uIrnLRV-5WVdZUjXJjSTYq-VeOvrXgQkxtaHtcSveXk9frfIFfQfPcAugSACkGucaOQtdz4yCACeEVNaALz_gGRiyAWgTGdvfgEG_kDZugAA",__position:0,__code:'() => {\n  function toastDefault() {\n    toast(\'Hello from Aphrodite React\')\n  }\n  function toastInverse() {\n    toast.inverse(\'Hello from Aphrodite React\')\n  }\n\n  function toastSuccess() {\n    toast.success(\n      \'We are using React Toastify, an awesome library, customized with our styles definitions\',\n    )\n  }\n\n  function toastInfo() {\n    toast.info(\'You can use React Toastify directly, if you want\')\n  }\n\n  function toastWarning() {\n    toast.warning("But, isn\'t have our style, if you use directly")\n  }\n\n  function toastError() {\n    toast.error(\n      "And maybe doesn\'t make sense use our library, if you want to use React Toastify directly - haha",\n    )\n  }\n\n  return (\n    <div>\n      <ToastsContainer\n        hideProgressBar={true}\n        autoClose={false}\n        styles={{ top: \'45px\', right: \'45px\' }}\n      />\n\n      <Button color="grey" onClick={toastDefault}>\n        Default\n      </Button>\n      <Button color="black" onClick={toastInverse}>\n        Inverse\n      </Button>\n\n      <br />\n      <br />\n\n      <Button color="success" onClick={toastSuccess}>\n        Success\n      </Button>\n      <Button color="primary" onClick={toastInfo}>\n        Info\n      </Button>\n      <Button color="warning" onClick={toastWarning}>\n        Warning\n      </Button>\n      <Button color="error" onClick={toastError}>\n        Error\n      </Button>\n    </div>\n  )\n}',__scope:{props:n,Button:s.a,ToastsContainer:s.e,toast:s.f,SCREEN_SIZES:g.c}},function(){return A.a.createElement("div",null,A.a.createElement(s.e,{hideProgressBar:!0,autoClose:!1,styles:{top:"45px",right:"45px"}}),A.a.createElement(s.a,{color:"grey",onClick:function(){Object(s.f)("Hello from Aphrodite React")}},"Default"),A.a.createElement(s.a,{color:"black",onClick:function(){s.f.inverse("Hello from Aphrodite React")}},"Inverse"),A.a.createElement("br",null),A.a.createElement("br",null),A.a.createElement(s.a,{color:"success",onClick:function(){s.f.success("We are using React Toastify, an awesome library, customized with our styles definitions")}},"Success"),A.a.createElement(s.a,{color:"primary",onClick:function(){s.f.info("You can use React Toastify directly, if you want")}},"Info"),A.a.createElement(s.a,{color:"warning",onClick:function(){s.f.warning("But, isn't have our style, if you use directly")}},"Warning"),A.a.createElement(s.a,{color:"error",onClick:function(){s.f.error("And maybe doesn't make sense use our library, if you want to use React Toastify directly - haha")}},"Error"))}))}}}]);