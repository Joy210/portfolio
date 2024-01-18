import { FC } from "react";

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 148 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M6.68 20.3197C5.32 20.3197 4.17333 20.1063 3.24 19.6797C2.32 19.253 1.62 18.673 1.14 17.9397C0.673333 17.193 0.44 16.3397 0.44 15.3797H4.04C4.04 15.7263 4.13333 16.0463 4.32 16.3397C4.52 16.6197 4.81333 16.8397 5.2 16.9997C5.58667 17.1597 6.08 17.2397 6.68 17.2397C7.2 17.2397 7.64 17.173 8 17.0397C8.37333 16.9063 8.65333 16.7197 8.84 16.4797C9.04 16.2397 9.14 15.953 9.14 15.6197C9.14 15.193 8.96 14.8663 8.6 14.6397C8.24 14.3997 7.63333 14.2463 6.78 14.1797L5.84 14.0997C4.33333 13.9663 3.13333 13.493 2.24 12.6797C1.34667 11.8663 0.9 10.7863 0.9 9.43968C0.9 8.47968 1.12 7.65968 1.56 6.97968C2.01333 6.29968 2.64667 5.77968 3.46 5.41968C4.27333 5.05968 5.23333 4.87968 6.34 4.87968C7.54 4.87968 8.55333 5.07968 9.38 5.47968C10.22 5.87968 10.86 6.44634 11.3 7.17968C11.74 7.89968 11.96 8.73968 11.96 9.69968H8.36C8.36 9.37968 8.28 9.08634 8.12 8.81968C7.96 8.55301 7.72667 8.34634 7.42 8.19968C7.12667 8.03968 6.76667 7.95968 6.34 7.95968C5.94 7.95968 5.6 8.02634 5.32 8.15968C5.05333 8.27968 4.84667 8.45301 4.7 8.67968C4.56667 8.90634 4.5 9.15968 4.5 9.43968C4.5 9.81301 4.62667 10.133 4.88 10.3997C5.13333 10.6663 5.57333 10.8263 6.2 10.8797L7.14 10.9597C8.23333 11.053 9.2 11.293 10.04 11.6797C10.88 12.053 11.54 12.5663 12.02 13.2197C12.5 13.873 12.74 14.673 12.74 15.6197C12.74 16.5663 12.4933 17.393 12 18.0997C11.52 18.8063 10.8267 19.353 9.92 19.7397C9.02667 20.1263 7.94667 20.3197 6.68 20.3197ZM21.8236 20.3197C20.4903 20.3197 19.3303 20.093 18.3436 19.6397C17.3569 19.173 16.5369 18.5663 15.8836 17.8197C15.2303 17.0597 14.7436 16.2397 14.4236 15.3597C14.1036 14.4797 13.9436 13.6263 13.9436 12.7997V12.3597C13.9436 11.4397 14.1103 10.5397 14.4436 9.65968C14.7769 8.76634 15.2769 7.95968 15.9436 7.23968C16.6103 6.51968 17.4303 5.94634 18.4036 5.51968C19.3903 5.09301 20.5303 4.87968 21.8236 4.87968C23.1036 4.87968 24.2303 5.09301 25.2036 5.51968C26.1903 5.94634 27.0169 6.51968 27.6836 7.23968C28.3503 7.95968 28.8503 8.76634 29.1836 9.65968C29.5303 10.5397 29.7036 11.4397 29.7036 12.3597V12.7997C29.7036 13.6263 29.5369 14.4797 29.2036 15.3597C28.8836 16.2397 28.3969 17.0597 27.7436 17.8197C27.0903 18.5663 26.2703 19.173 25.2836 19.6397C24.2969 20.093 23.1436 20.3197 21.8236 20.3197ZM21.8236 16.8397C22.4636 16.8397 23.0369 16.733 23.5436 16.5197C24.0503 16.3063 24.4836 16.0063 24.8436 15.6197C25.2036 15.233 25.4769 14.7863 25.6636 14.2797C25.8503 13.7597 25.9436 13.1997 25.9436 12.5997C25.9436 11.9597 25.8436 11.3797 25.6436 10.8597C25.4569 10.3397 25.1836 9.89301 24.8236 9.51968C24.4636 9.14634 24.0303 8.85968 23.5236 8.65968C23.0169 8.45968 22.4503 8.35968 21.8236 8.35968C21.1836 8.35968 20.6103 8.45968 20.1036 8.65968C19.5969 8.85968 19.1636 9.14634 18.8036 9.51968C18.4436 9.89301 18.1703 10.3397 17.9836 10.8597C17.7969 11.3797 17.7036 11.9597 17.7036 12.5997C17.7036 13.1997 17.7969 13.7597 17.9836 14.2797C18.1703 14.7863 18.4436 15.233 18.8036 15.6197C19.1636 16.0063 19.5969 16.3063 20.1036 16.5197C20.6103 16.733 21.1836 16.8397 21.8236 16.8397ZM41.2288 19.9197V5.31968H44.9488V19.9197H41.2288ZM31.9488 19.9197V5.31968H35.6688V19.9197H31.9488ZM35.0288 14.1797V10.9397H41.8688V14.1797H35.0288ZM46.5858 19.9197L51.2658 5.31968H57.2258L62.0658 19.9197H58.2258L54.4658 7.91968L55.5258 8.31968H52.8858L53.9658 7.91968L50.3058 19.9197H46.5858ZM50.4058 16.5397L51.5258 13.4997H57.0658L58.1858 16.5397H50.4058ZM63.7066 19.9197V5.31968H69.8066L74.6666 16.9597H75.3666L74.9666 17.3197V5.31968H78.4466V19.9197H72.3066L67.4466 8.27968H66.7466L67.1466 7.91968V19.9197H63.7066ZM87.6419 20.3197C86.2419 20.3197 85.0552 20.0597 84.0819 19.5397C83.1219 19.0197 82.3885 18.2863 81.8819 17.3397C81.3752 16.3797 81.1219 15.2463 81.1219 13.9397V5.31968H84.8419V14.0197C84.8419 14.593 84.9485 15.093 85.1619 15.5197C85.3885 15.9463 85.7085 16.273 86.1219 16.4997C86.5352 16.7263 87.0419 16.8397 87.6419 16.8397C88.2419 16.8397 88.7485 16.7263 89.1619 16.4997C89.5752 16.273 89.8885 15.953 90.1019 15.5397C90.3152 15.113 90.4219 14.6063 90.4219 14.0197V5.31968H94.1419V13.9397C94.1419 15.2463 93.8885 16.3797 93.3819 17.3397C92.8885 18.2863 92.1552 19.0197 91.1819 19.5397C90.2219 20.0597 89.0419 20.3197 87.6419 20.3197ZM96.8316 19.9197V5.19968H100.552V19.9197H96.8316ZM105.632 19.9197L101.532 13.7197H105.572L109.912 19.9197H105.632ZM99.6116 15.4397V12.5797H103.112C103.552 12.5797 103.932 12.493 104.252 12.3197C104.572 12.1463 104.818 11.8997 104.992 11.5797C105.178 11.2597 105.272 10.8863 105.272 10.4597C105.272 10.0197 105.178 9.63968 104.992 9.31968C104.818 8.99968 104.572 8.75301 104.252 8.57968C103.932 8.40634 103.552 8.31968 103.112 8.31968H99.6116V5.19968H102.892C104.158 5.19968 105.252 5.39301 106.172 5.77968C107.092 6.15301 107.798 6.71301 108.292 7.45968C108.785 8.19301 109.032 9.10634 109.032 10.1997V10.5197C109.032 11.613 108.778 12.5263 108.272 13.2597C107.778 13.9797 107.072 14.5263 106.152 14.8997C105.245 15.2597 104.158 15.4397 102.892 15.4397H99.6116Z"
        fill="#0F172A"
      />
      <rect x="115" y="11.4197" width="32" height="3" fill="#0F172A" />
      <path d="M0 43.3197H20V23.3197H0V43.3197Z" fill="url(#pattern0)" />
      <path
        d="M25.48 39.9197V25.1997H29.2V39.9197H25.48ZM34.28 39.9197L30.18 33.7197H34.22L38.56 39.9197H34.28ZM28.26 35.4397V32.5797H31.76C32.2 32.5797 32.58 32.493 32.9 32.3197C33.22 32.1463 33.4667 31.8997 33.64 31.5797C33.8267 31.2597 33.92 30.8863 33.92 30.4597C33.92 30.0197 33.8267 29.6397 33.64 29.3197C33.4667 28.9997 33.22 28.753 32.9 28.5797C32.58 28.4063 32.2 28.3197 31.76 28.3197H28.26V25.1997H31.54C32.8067 25.1997 33.9 25.393 34.82 25.7797C35.74 26.153 36.4467 26.713 36.94 27.4597C37.4333 28.193 37.68 29.1063 37.68 30.1997V30.5197C37.68 31.613 37.4267 32.5263 36.92 33.2597C36.4267 33.9797 35.72 34.5263 34.8 34.8997C33.8933 35.2597 32.8067 35.4397 31.54 35.4397H28.26ZM38.9647 39.9197L43.6447 25.3197H49.6047L54.4447 39.9197H50.6047L46.8447 27.9197L47.9047 28.3197H45.2647L46.3447 27.9197L42.6847 39.9197H38.9647ZM42.7847 36.5397L43.9047 33.4997H49.4447L50.5647 36.5397H42.7847ZM65.3655 39.9197V25.3197H69.0855V39.9197H65.3655ZM56.0855 39.9197V25.3197H59.8055V39.9197H56.0855ZM59.1655 34.1797V30.9397H66.0055V34.1797H59.1655ZM72.0425 39.9197V25.3197H77.2025L80.2025 33.0197H80.6025L83.5825 25.3197H88.8425V39.9197H85.1625V27.4597L85.7425 27.4997L81.9825 36.9797H78.6025L74.8225 27.4997L75.4425 27.4597V39.9197H72.0425ZM90.4881 39.9197L95.1681 25.3197H101.128L105.968 39.9197H102.128L98.3681 27.9197L99.4281 28.3197H96.7881L97.8681 27.9197L94.2081 39.9197H90.4881ZM94.3081 36.5397L95.4281 33.4997H100.968L102.088 36.5397H94.3081ZM107.609 39.9197V25.3197H113.709L118.569 36.9597H119.269L118.869 37.3197V25.3197H122.349V39.9197H116.209L111.349 28.2797H110.649L111.049 27.9197V39.9197H107.609Z"
        fill="#94A3B8"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1309_835" transform="scale(0.00625)" />
        </pattern>
        <image
          id="image0_1309_835"
          width="160"
          height="160"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAkaUlEQVR4nO2de6wk2X3XP79T1Y9778y98/I8dmb2MbveXW/W3tgbxya2CYoTW4AShShI/EGCQALLUv4IQQriD/gnYCASIIJCokCEEHL4I0AUCCDbkNiRE5vYTuxk7d1Z79rr2Z3Zee687qMfdc6PP845VdV9u/tW9+07PXdc36u6VV3PU1Wf83ucU10tqkqtWouSWXQBan13qwaw1kJVA1hroaoBrLVQ1QDWWqhqAGstVDWAtRaqGsBaC1UNYK2Fqgaw1kJVA1hroaoBrLVQ1QDWWqhqAGstVDWAtRaqGsBaC1UNYK2Fqgaw1kJVA1hroaoBrLVQ1QDWWqhqAGstVDWAtRaqGsBaC1UNYK2Fqgaw1kJVA1hroaoBrLVQpVVWevdP/zhLrTYrS8sst9q0mk2aaYNGmpIkBhHBiGdZAUEQIxgRvwMRP1dAVFD8C5HE+OUSloGAFKOwJOy12DcCImG+FGvmUgVj4q7ydUBRxG+rebFAw5JwDvmetCijP7iiOmKfA/M0L8LAPB0sf7msIhKW+e00ToT9Oy0+qyqqfmdOdUlEDzvHWdCzAgdVNVW0idJUaCnawNFUtK3QwOkG6B2FO8AdVO8oeleV26p6B1gHvQbi4sWR0j0VkdK5C4jinJI5S6fXo9vvsdXpcHdrg8/9m/84kqeyKgFYa2FqA8fC8DDwSBifBB5GOKNwCnRJUdQqDvUV3AVwcQCo85UMzas/Ea4IP9AHuiCvAi8C3w7jl4DXgcvzPsEawMXrKPAYcJwCMA+Z6mmnPKS4g+q85XPqUOetjsPhnCvNx4+DlVQFVYc3oBrMK3jTHq205B5IkAZCQ+A5MeY5QTDGD4jcFHgZD+JXgc8BXwDsbk6+BvDeag34HuAp4D3AuxA5p3BGNUClikawwmcPmocsH2tcpmE9P8+D53BKADNaPQ8kEcQhST740MmEUCURg0kMiUkOJ8a8LzHmfSZJfjIxBuAbeBB/L4yvTntBagD3TmvA08A7gXcA3wc8priz6rxlcs6D4QaAcaiP7zx4qjhHMa3DY8W58rQH2O+fAHOAMAAYnTCqA7GzAAZDDPMSDEYMiRVSSUgSQyqGNElIkoTEmGcQeQbVjzvVq8AXgd8FPoOHc0fVAM5H0Y2+B3gGeA54VtFjah0OzS2XqmIDZAEVD1xIcCJIKoqNFjAC5xw2WLhMHRrBcy6H2FlXsoaD7ploIWNGBEicCG7YBJdsxI8TMSTGQ5c6P25oQuISEjF+ew/+8cy5H+tlvR/r2cwBfw34zZ0uXA3g9DoGPA48CzwPPCnwnEOP4QZdpGph3bwFi9D51CA4Rv9ZNVhB58HDu2BbtnbOkTkX1rE49cvVWZzzwKr66WgVNYBbxIEOVRmMCYVyHBisH4gYEjGkiSF1KalJ/DhJaCQeQKPgrMVlGdY6+jZjq9c1/X52osrFrArgGWALuDHlzdrvOoK3aG8H3ot3pU+rctI5m8dbtmSldAA2b9nyWK0MG8HlxvmqWA1JhHOD4KnDBvCyCJcrLKANn/MhQqeaJyw+GdGQDcfMWBnIgYkxoHfBJgCYJIbUpB66xAPYTD2QAqh1uKxP1u3Ry/r0+hn9LNuqcoGrAvgxkL8J/A7wf/F+/kGDcRVv1Z7BJwrvAR5zzp0tB/MuAKcuuFZVnESY8PMo3GvhQsvwaWEh8dDaAYupwfq57RAOAxisbgTUV4JgiWPmHGAsXLArcpHYrliSEUC8M06MkNiExGQ00pTUWVKb0HeWNEl8k6BVXJbR73fpdTr0reJcteS4EoD9LKORZKettR+zzn0M9Drw+8BngU/h0/P9ogQ4RBGzPQU8L/CkOneqyCQjZMEqEeHSAjaJMBXWLH7OIcNhYzIQ9lXAF6Hz6+OiJfR02BxGV2p+cUXZYiJTdrc5yNHBl//IY0DVcqN28VkAKwAWQbDGIGJJjcGqI3WOJEnIsCQu9cbTOrSf0e/16Pe6vnlHqnWyVQJwq9vpAyTG+HYh5Bgt8xPGyE8YI05EvgD8IXAen/1cAC5WBGIvdBR4G3AKeBTfvvYQcBY4q+pOoxzybWnxxodYTV2RGKColOM1sCWX6XJ4SqDm1swNWDtXuvER6DwhQHLoFIpMdsiCDQylRILYi6RSnkGxQlmybbmWNsmbasJ8dQ4jQgZoluEUklABjVEEXwGwFucs6hQJvUZVVAnAza0tnPMpu4aMzqrD0aJpGyZN0g8kifmAEYMxBkTWxcP4Hfz4z4BXgWv4WHIDWB9zhapoFd8bcAIP1jkKyB5C5LSqnozNDf5GlhplKVxcvN4+VgOVAMFwZhphjFAFSHLXuc3d5t1lfp8uj7zC/Y1j8KjLAGB5gzFa9HxRYgwmczawwrgVB/oER68augY1dBc6daCCWB9TCiABOoGijVHnCWC3Q+a8HXA4rIA1kBml5SwNk2ISQ2oMiSQkJjlgjDyfGPO8iEQoMWLuGGET2BSRdTyIm8Bt4FYYG2AJaI0YGmF8XJ2eVHQp3sj8plIAoVpYrtz1CHk2qnjgQjOZt2LO+Quu3tohPjlQ9fOtcwMWcHC6cGtl2Ip2t9L0kMrzJ3M1DFWcHrG2bJ81XkNHHbVLKcxktNxSXjlaTmWg0kxSJQCttXRc19diI7hGik0MfVF6qjQSS+pCxhTajRIxvkXdiE/njcGIWRVh1UiCMf6EBrqCSg8vlJ4TyJVXSs1tW37TXWmZC1bMO4hgXUIHf2HF/AGcFlYuXyaDEHtgXcnS+X3FKhkNVnSLA+NZFE/eGcjPbPgqTLm/8vTEXZRAHAWRFA+MjFVuvXdWJQANgjpHp9fDdQ22kZIZyMTRQ2m4xLcRiWBMkkPo0/jQn4iPH/PWdiP+WTAxeQNoPMH4ZEx+KYYedEEUF6CNDQmxyUNDJ2du4cJ2Lq4XQCuDmluv2HwSgIwNFhoOHLeLsRxhf8V1nw6OcVaiovcKO2Eqoziw3kTXHS2ht3Sjw0kp2hJnVCUAY3Yk4q3hZq/r3bBAUx2NJCVJEtIQA0YL6JMWQ4J3w0ZCC7sxiAtWTkze7pTbvfyJn+LKKiUPQAFlYeX86t5qSR7L+fIXgKIl90iRYKCFa4b8GZLi/wBoxf9JquqGhrYqDiLD1o/qkFU8VHAMQwrQxQOMsHj5x/xxs3ItqF6oyj0hGsphxKDq6Lo+2hMyVdLUklhTdFxLgC4xuUU04ZlBY6L1CzBGd+tbPnOXXJxpYelihYtZn+YQaf50h4bQuLB+mldgxQfQZctYtpQxySqd9QD1k4CaHrZxG0xr/saPPQo6tIXC0HmaEBePLo6MKGrZhJZc8k6ueYSm64oLvl3wljmzGc4IqVoPmRHEluI/G9xwhE4MRhLE+ExDxD/MKtEyRtcrpjiPEBvmgOSWLVbfAJHEkpXtk3fVhRvxFJUYpvxhsFbnh9+m+cG2w+q7sW75rooKPZjoFPMGvMu2Y46Kxnc8aGVVB1DEW5YYm4ZSq3NkqjhxiJOY7fq4TwrwCqtnQPCWMCYhIvhEOTyRHKCMJyMiqEoBzUCZilodGcu3AzQGzZAnOxqPEedqsT+vIsMTAYfQM4bMCDaU2eIrUaJKqo5UlTSEKtWv6Zj5sVLMAcDBwwnKcGIzeCCRURDG9cbteJwl3lnTWcAxcYCGzFCihcmTBPUPdkdXGwcjiBUE49cxcX6wfAPWkPAYf+GuQywQDJsMWKTiEfqicz1O60Cph8+tANUaYcuk9ExCL01pO8eRrMdR2+dg1qfvlBUcXUlYTxLupE1uN5rcRnAKKy5jyWYkDCZQU2uUqR16HD5ej4FxWC3naEeYB03ueAhLO8+/zzC0i/EzRqoagOUTGHVNhj5rfvZaeDgU0QCRRmvkQogRXLB6uyJSgieAp0joowzzLeE7J7kdC9/1CM+4FaFbvp/B0hZjb+VgPUnZTBusquPhfofH7tzhsY3bPLy1wZneFkdtH5NlpFlGYjxsm2mD280mN1rLXFg6wMsH1nhpZY0LrWUsymq/T0stk23jiGVTNGVUUiUeihu9DcKB1vD5lWtOj2NFHyeMrLVlxYRJhubtsOvxC6XC9PitHXA9bZKlTR7rbvDOW1f40O1rvOvOWxzZ2mCl3wdVNpOETIzvETCCZv7iLfW7nNxwNNR3WfXSlDeWD/Jna0f5/NFTfGH1GDelxZF+h6bqDiDeA42yhgPzJpjLoXsrE1atepozADi85ykvqBnepBosg00DM97E3IL68c20wWajybNb6/zQ5Vf5kesXefT2TUQdG0nKepKy3mp7iw5FXDp294pxysm7t3ni1lt89M0LfOXoCX7rocf43OoJcJYjWS8/mx3LqsVkeXZZM9miQY+77Xjxw0TAdl0Ir/k9kDpgohkdE8wYJ1QvA4Msj2DboGxJwq3WEuf6W/zY66/yo2++xpn129xJG7zVaFLy9UilMuZBBtbAukm424CGs3zg8gW+/8ZlPvXQo/z6mSd5pbXCie6mjw+H9zAcY8fG7mmvw6waZx0nfd6lZgMw746JrnfUOiPWH1go2ya3gTsKokmfJxUZ724vNZdYEuGnrrzGX3/9POfu3uRG2uSN9kr+PebRu5vO8gqQmYQrrRVaNuPHXzvP9928xr94/Dk+feQEh7sd2uFhiHjq9460UiFHHrc4T5EQU2+rLaXpXUA5PYAyNFEFvoEF4WQM2wsvTAXV6ANul1FlM0m502jx/o23+Duvv8T7rl2kg+FCazn/Evv2guy8751KIyi9JOFSssLxO7f45y/8Aaff/r38p5OP4fo9Vlzm2yqnPkipUpf60PMSCLMlC6O2q1K8GSvP/L8TIpA3/I6LmYZr3kToqpjASUVRrjbatJKEj1/6Jj/9nRdZ62xypbWMSxIGe152B9tO61xrLbHa7/FzL36Fts34tdNvR/rKkhuRJZdbhwd2FuZVgWvH9pQqJR8RiM5R8wVwwDpOKPGOJzM7EHGb6HIvt1d42Hb5B+f/mB968zvcThpcbB/0/c8z7Xl2GeBus4Xt9/j4K39KN23wH06eo9HZHPOSnnl0hcj0IFZNPoa3mUH39ltxE7kcbwZjgB6b/QY8jgytEBIHK8KV9jLPb93mEy9+icdv3eBSaxmXpMjoLGkk9ruFbtiICcpWs0nS6/KzL/8JV5tL/PfDpzjd2ZjNFVdV3uE7JVnb+oLLn2chdahYu9q6rG1JxqTlUVpygTJ4KpGnKeNBwb8r4nJ7mR+8c51f+trnOXPrBheWDuCM/x7rjHnMzseW7cPI9VS522yRZRk//80/5tnuOtcabcxeZiEKE8Oi3WgXu9yD17NVhS8uGAwI85s345FV4c32Ch++fY1/9sIXOLi1wZX2yticZ1ZVhW2cjCo3WkucuHubn3ntBRJj2JJkL21gUMUjyPDEUBocvdBU93u75gxg9cJ4GAZNuNnF1Y8Jx6X2Mj+w/hafeOELLG9tcb25vOuT3C1s42SAy61lPnTldf7yjYu81WzPZ8eTJPm/Gbabv+YD4JSFk2FbNIebalS50lriqe4Gn/jGF1ne2uR6e3lqt7ZXsI1T3xisU37y0iucsF02kvBVx716dejo8Hdh2v1pjsp8p3hwYR4Xw6DcSpscUssvvPRlTty5zdWlQfiE0XDdS9hkxGCA240mz968xoffusR62tjbQuQlYYr8YejCTPu41gTt3St6x8InEwGd5TAdSeg0mvzcay/w/LWLXG4vh3ebzJbIzEOjYBunTAw4y4evXeSw69Mz98mbk4cLve0kdp80zflMxzdaSnnBLKnnGJOlCDday/zV6xf4K69/k8utJf/ug3usqrCN2/Z22uSdt67z3PpN1pN7YAVnzfTmrDkBOP5MpDQ1dQXawTcKcLPR4MnOOn/7Wy/QUeiladUv5c+saaxbVfVMwsFuh/fduoIze9ogc19pOgDLSesMV33gaZ+djlPh3SJ9BJuk/K03znPm7i1uNtv+qexdahRg84Rt9DGFjgjfe+s6x7MunYrvVtnvmv4sp7gDU7e55f2fg80z4/Z9rdnmz9+6yl+69C2uN1rVC8a9B6yK1tOUR9fv8PbNu2zeCzd8H2jPqtkgfDJ6waSNdtCWSVgR5afeOE/a69NJGyNj5nGZ5/2oTBLWeh2eXr9FJ7kXjdKL12z3oooL3ZMdx7WUt5ptPnLjIu+7/ibXW22M6n1jyWaWCDjHuY3bNFHsXrcL3QeqDuCoayHjFkTp4NTE61k9K+tIwiGX8aNvvkZmHdYsIO3dI62bhMe37nIq69L9LogD53+Gs1baitsJcKvR5M/dvspzN69ys9nan9ZujPpJyqGtTZZ7XbIHqGKN0x5XsWmcYbX1LP79bH/h+iXa/d4Dd5OsCMv9Psf7Xfq1C77/tJGkPLa1zrtvXmPdpA+U9QP/YtxltZzIejWA90wVL7QCnaTBu+/e4NTmXbbSB+9XJlSEVB1LWR+tY8D7S06EBo7nbl8ntRb3AN4gBYxTUme3vZryQdS+uoMdk3Cq1+GpuzfZul867PdID77z9dpXd7FjEh7trPPQ1gZbD2hPQQTvu8H6wT4CUETomoQnNu5woN/DPrAWUHEi2Lon5P6SAxKB05t3SVz2wFoIUciMoZM0MPqgnmWhfQNgD+GozXisu8m4b9E+CEpQNo3hatqkMcfXoN2v2jd30hrDctbjaGeTXvLgNb9E+deINLiStmjUFvD+kRVhOcto9rrobr4+d58rtZaN9jKdZpPE1QDeN+qL4W1ZjxVnyR7g8PyAzfh2e4UrjRat2gLeP8oQDrqMNg73wHZRKYkRvrNykHUMaR0D3j9SgQYOM+l1vvtcxikbjQbnVw7RcvaBPc+y9g2AXg+q5fNashlX2gd4ZWWVJVvtB5/3u/YNgKLeDesD637hgMs4f/AQbzSXWHLZ3h5sl7/xNi/tGwATlI0koSuCeSBjI8WJ4auHjtMRs39uzC61b86zqcrVpMmGJKT3Q9Wds5ayPpdWDvLltWO07V7n+RXfejp8mffgsu8bABN1rCcpnUYTM/aX9fanFFi1fb5y5DjfbB9gxe6h+935G68jtMsfA5mgfQOgUaWbNrjdXiJ1D1aA3nCOTrPJZ4+epg972/wyj9fxj+Rutn3uGwCb6rieNvh2e4UVfXAAVITD/S5fPXyC/7d2jLWst8cBxv3lPfYNgAnQV+GN5QOoSfb8/S/3QgokzkJi+B8nH+UWKW3r/IJ5d4JIOGJV66pDE7v61cXx2jcAqiotZ/nm8hp3Gy3SfdJNpRMGh3Csu8UfHT3FZw6f4nCvu3f2KW92mQdIRRPO8A9iT6t9AyBA21leXVrl0tIBlm1/0cXZplGQTVLb9rHNBp88+yR3xbDEHoYWM3NSIRXeRba87wB8s9nmG2uHWXJuYdHMOIs2jRxwotfhf506x++uneBEr7MHv6SpoG76H6sZ97Nc25bfdy+onFEVL5BRxQJfXjtOp9EgvQePK+0WtJH7FOFQr8uF1cP8+tmnaGV9knlVJ9XSALO53LhNqUw7FW/G4lcHcNQBdpw3zS3beT0BlrM+f7x2lG8dPMSBrL+r2zYpPpsXbKOUWsuSKL/+yDt4ub3CkSzGfqUjiw7BVHGYVmPdZ+lFkHvoamazgNsgm4Mq7mbJWV5vLvMHxx6ijUMqbqilsat+uLnLKZzobPLpk4/y344/zNHeVqlk91g7wkeRb+zRG9HuwbthSlMTr3G1znEDNLKMzxw7zeWVVVb6/cqW7F7e4lHGySK8rbPFq4eO8q/PPYs6S/teP3Y1wrtO0kijqkPTuziB6QGscrBqLM0kxXdbvbC8xqdOPsKhrI8u+OGEKp7QiXCo2yFrNvinT72H1xpLHO13Z0o8ZgoRyuCNsny6/cOO8M1B0wGozPhu6IrBbEWQEmC53+c/P/Q43zp0lCPdrXv2mNYsYZeKcKDf44Aov/j08/z+6jFOdje3wTewXzfnuHQvA9tdXPrZXXCVCz9u9XHbCqW7Ov6sFFjLeny70eZXzz1L2xhaWbbra7sXMb4Tod3vs6qWf/Xke/jk8Uc53tkamWPMUxr/VQZvcKVt5SkXMlT2iWWueD5zigGrHW3nOLC8y8lNLAqc6G7xO0dP818ffpLj/c5UzwnOA65x5YqDFWGl3+OI7fGrT7yLX3voCY51Nmlolf6DoTVG1ogJFWXsASb63/xQOxdvPuZ0b36scKTH1e3Z1I7Po00mo61Ks9/n3z78NH967BTHu1t5F2q5KWwvYNvJPToRVntd1tTyy0+9m18+8xRrvQ7LOq4BfWhPZW8whwJr+BtxRwZuw/hD6eSVts2qVua9y4KHK/Dwh2kq0Jhq7lQ5lPW4ahr8kyfezeUDaxzb2sKWO873CLad1j++tUHLCP/4mffyS2ee4mC3w4rLcPON7CaWovxXSLbNK1fS0WczOSQa4a8rl3L3AGp5IsYIo8uRn/jUPyAy+fDH+h2+urzKP3zm+9lcWubE1uZUD5OMQ2I6NPwtNeo41dngysE1/t67PsAnjz/C8c4GK1rhfTZTH3j6Ug8bgskGdty+xm2gkxeP0Hws4KwVeE6VX/Dx4OcPHuXvvuuDXF9d5VRnE3FFPd89YKMKXgwKHOp1ONXb4rMPPcrHnvsQnz50nJOdTZqqOGTS5qNDs90VabRkh+UDK1G8vXbk+qVlM17QhfQFb2uW2SWE0UGc6mzyhwcO87PPfoDzx05wsrtJw9pdfpF95zvbyvqc2drg7tIKv/j0e/n7T72XS0mTs1sb/nvMs9wgUVDZ2TxPFcpQ8TnDEfdHRq0RTm6q7HJQe/NrmTvM8rMHr5wq7ObZgniNTnc3+UbrAD/7zPv57cee4pjLONrZQFSZ3Og7vStrZRnHO5s0koTffvhJfuadH+TfnXqctN/nWK834/Hm5BZGHWKqDSZsp0NjKAE6Xdnn95qpvJaMqS4j7oVHYvBnvFQrv7N8rI73OlxvNPlHj7+bLx06zt+4cJ6333mLTYT1ZmumRmsN/4xzHLB9VtRxs7nEp0+c4bdOneMLq0dpZH3OdjYAcLJt69kOmH+YBthZvnmkEz8W89X/kOSc6sgeveesKoRC0RRQoDguKFY8nHH5YAXUgfUOZT16rs9vHj3Dl9aO8eNXL/CRq69z7u5NnCpbSYN+YnCSDAKppQn1LqLpLMs2owH0Gw1eO7DGV46c4P8cP8ufrKyBcxzpbNKg2vPBA+3s5XMZdtdVTFe+fnlDB9sAdQw1uAwNw+c/otBTWIeqfM4XwElWcMLsYiGTVvBrVbwGCrRUOdNd52bS5FceepL/+baH+cDtq/zAzcs8sX6bw90ODdunmTksQgpYBTHGw2aEviTcaLZ4efUob6yu8uLqMb64epTXGm1azrLW6+TfYhu+6JV7Coaui4bLsK3lyal/nEYVVUWtQ52izvnP6orBqR+0vDzuPfbzhf1tK3AoUPydIWWHk5lduwBwkpkamBi92UQQlfm1EAmrNuOgs1xLUn7j+CP872OnOdvb4mxnk4e6mxztd1nJMlpqcQpJmnInSXmz0eL11gpX2ktcba1wp9lAnbJkM070tio24I4o1KhmqhIQqqHBykagPETOuTAOUOXztFimiuJw1u+HuH15IMAYWglciFY1/+0/9fyJCbXdFA3jRWEBRVX8bzQPhY5Vg5zpAazkY6Qo8CRzNewR8nmzxDCT+44FOGgz1qylJ8KrjWVeah1AxKBGaDvFGf+gQ4KyYVJEFSNC0znaNuNIt1PJW207n5JbVyQ0D2lIIKOlAjSApA6c4tSiDmyAS53irC2snrM5jM45cA4bLV5+DN9g7927C71DLvfYmpcrACiS3wM1FsFgjEHVhDoiaAIq4s8l9gvH05zyts1mAQf6uEoXurjOpVpehrC08ihDN1z4WZKRnUImgYYqzazv40kEI2AxmPjwr8Cy9sN9GEySJh9TQvOJn6kQXCbBGmk+zi1d/M6G86BEoBhl3Zx66KJltHGZh9IF+GIvkbecATxK5UB9a0w5dAjXIho8EDAGEFxiIE0Qp4hRXJpgAE0ACedkNeBQLZSKmgHAca53yNoNQxhjiuGF5fIOl3mWsKMytNFB+8kEN5iRj9tRLLoOzvT30lsuDXEakFsjSnB4ixesnPNu0oX4Tq3DRbhw3g1bm8PlrCsAta7kihUXYC7cbbB2rihjBHDYmcbKiIAYAQnWzRgwBpckSJpAmmBsgrMOaaRgDKIgqjib5RUOqdamNgWAQwFLfhNGePyR904L1zywv71+jm8cxRWOu61ClK2Z33cOV27VXA6bd5WgagOYpaQhWDMcOUTqwDm7Lb5TW7jYOA+nWGdzoB0KMdmIFSImJuEy+GWh3OpvoIb7l2MZwRNADJJ4FywlAEkSbGohs5AkvuKqQmZRGypyxRC+GoCldoM8G9chIKs24m3jriqIYzqYd9SE2DA/9OA6EuFSRTQ08DjnOybKoOVZZgj243xbuE7ieCB2czhbhjKsZwu3nLvYAFQ8ZgEWJdhDgZ324hIUpy5WAfHTog6nLWAFNPFuWYvrkMMYDAw+CXGJICZBEgOJQdMU0hQaDTQ1GPGNaJpZbw0TA64agdUAdMWE2NKFVy1AzPsMhz6P0zbDOY8AcPRxxtrAkChptM7hRPMb4lzJ4pXcm3MFPHlzSJEoYEsWzIbB2dzqxSYSXCk2y2NFUInLYmEUVO8AN9XpDZQ3FC6CXgSuAJdALyFshR1aFItgQeJ0H/8yhgOqegTlMLAGHBFYVTiCcgj0OPAU8CiqRzTGtEZx1ids0rdokqFpH5MmGOMhBINJDGoVkmqGYgoLqOAEtRaxFjIftKmqjwOM2w7d1NZw1MI4GYkds8+xibMOLNNiIr/BEsZOhfxZ+AhIdLsBHNTl7W/DcVjuKq3NrV9sSvFNb5q3u+ngvy1FrqJ6DdXrKBeBiwJvOOUKyBXgCspl0M7ki7qjbgFv7LiWchL0HSDnUN6J6jOqek7gcXCoCtY5yJz/CaskxSTBqSdUfrdNZQBjI6bLLPQyjAsxhfM1wAerPmj1MYT4i21MkVVFEMYlG8p0zX9lgLUcWvuyxRYdiRUlHrrsdqLHisFzKVGgFJupswE+xTmbW7kInZ8OgKqGG1Bu/M1rwRXgReAV4GvAC3gLdg24OcXZ77Uuh+H3ilm6AvKEwtsF/aio/Iiqe0SdQSU+aGtQY4ZCtPGqBGAedCvQy3yrQbAGJA5nfLAqRhATCmAEkWAZI5yhYVOU0N4ULFrZuLmQq0RIS0ZPA6ASgmmftUneoBpX9EGxG2hSlACdBFDFlZpEVAM85Uw1JgDlWM2itmgmiWHIGNgy4HXgz4CXQb8ept/AQ7gftYGvNF8D/guwCrwf5YfV6UdV9F2SNzfRqrLDqhbwQA5g6cZolvjsKAlZUuKhI2ROGqyhBCCjhSQ0/sZGTL9O/CwYI0WjSAhwEXycYX13WTnnGbRuFK4td6/xo+YghlpUJBV5wuCBI7rT3DoqhCaNogEgh+0mcAEP2NdBz4fpi0D85vmDqDvAp8Pw88D3gXwE+Ek8rDuqIoB8u9xFJOqg66Bv0cRgksTDlogH0YTGS0mCVRQPqQT3HED16boEw2hyABE8rAFCf8PFd6eX4rkiL/YWWlwkrQSJi59LIJWz2FKzhoakQJxPSlRdyWLnsF1QeA3vOv8U9JUwvV+t2jz15TB8QoRKP+hctR3wV4CvgH4Upz8MfAhVURWwDmust3KCHyc+JvRuuXDN5BaxaOjMt5MidoxdQoUXHmomCWMNYBEtWj7W/LOPBSN0OmDRfBJcCi/KLT0ifZSXQb+p8BLKV0X0W8BLwN2K1+27WZXenzdNT8gfheEXgO9R+Kiofhj4QZyuqPPWQnHeqokJ3TrRBReA5suDlcOYECJGCyhFlyShjYkigfAqAQf5UyKEdSJYUl4Xcsh8LBhDAO4CL6HyInAe+BqqrwLfBulOcY1qTalZn4b5ehj+JXAa+IvAB1F9FnhMHEfA5U1rKj4hKLvYmKSAn3YBOgiWsdSEs63hZdgFq5ZgHUyzNRxXhC5wC5WrwEWFV0T0PMjXgFeBSzNei1q70DyeB7wI/PswABxReAb0HQJPozwHnFN4BKfGP+KDd4MSrGYW4BQNVlRyoDyQFJardOD86Q3FgdwQ4abCVdDXEd4QuBTa0C7iAbuMD46rtRHU2nPtxRPRbwGfD0NUE3ga4TToMsoRhCOqHAEOC3IM1UPAanCjmYIFtSJi1T+y5lv1oSsiF/FNHBcRriG86Rtp60Rgv0kW/WapWt/duj9e0Vvru1Y1gLUWqhrAWgtVDWCthaoGsNZCVQNYa6GqAay1UNUA1lqoagBrLVQ1gLUWqhrAWgtVDWCthaoGsNZCVQNYa6GqAay1UNUA1lqoagBrLVQ1gLUWqhrAWgtVDWCthaoGsNZCVQNYa6GqAay1UNUA1lqoagBrLVQ1gLUWqhrAWgtVDWCther/A0QZ1rPbYPzJAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};