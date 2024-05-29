import { cn } from "@/lib/utils";
type classNameProps = {
  className?: string;
};

export const UserIcon = ({ className }: classNameProps) => (
  <svg
    className={cn(className)}
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M70 17.5V70H0V17.5H17.6709C17.6253 17.1354 17.5911 16.7708 17.5684 16.4062C17.5456 16.0417 17.5228 15.6771 17.5 15.3125C17.5 13.1934 17.8988 11.2109 18.6963 9.36523C19.4938 7.51953 20.5876 5.8903 21.9775 4.47754C23.3675 3.06478 24.9854 1.97103 26.8311 1.19629C28.6768 0.421549 30.6706 0.0227865 32.8125 0C34.9316 0 36.9141 0.398763 38.7598 1.19629C40.6055 1.99382 42.2347 3.08756 43.6475 4.47754C45.0602 5.86751 46.154 7.48535 46.9287 9.33105C47.7034 11.1768 48.1022 13.1706 48.125 15.3125C48.125 15.6771 48.1136 16.0417 48.0908 16.4062C48.068 16.7708 48.0225 17.1354 47.9541 17.5H70ZM32.8125 4.375C31.3086 4.375 29.8958 4.65983 28.5742 5.22949C27.2526 5.79915 26.0905 6.58529 25.0879 7.58789C24.0853 8.5905 23.2992 9.7526 22.7295 11.0742C22.1598 12.3958 21.875 13.8086 21.875 15.3125C21.875 16.8164 22.1598 18.2292 22.7295 19.5508C23.2992 20.8724 24.0739 22.0345 25.0537 23.0371C26.0335 24.0397 27.1956 24.8258 28.54 25.3955C29.8844 25.9652 31.3086 26.25 32.8125 26.25C34.3164 26.25 35.7292 25.9652 37.0508 25.3955C38.3724 24.8258 39.5231 24.0511 40.5029 23.0713C41.4827 22.0915 42.2689 20.9294 42.8613 19.585C43.4538 18.2406 43.75 16.8164 43.75 15.3125C43.75 13.8086 43.4652 12.3958 42.8955 11.0742C42.3258 9.7526 41.5397 8.60189 40.5371 7.62207C39.5345 6.64225 38.3724 5.85612 37.0508 5.26367C35.7292 4.67122 34.3164 4.375 32.8125 4.375ZM65.625 21.875H46.6553C46.0856 23.0599 45.3792 24.165 44.5361 25.1904C43.693 26.2158 42.7246 27.0931 41.6309 27.8223C43.9779 28.7337 46.097 29.9414 47.9883 31.4453C49.8796 32.9492 51.4746 34.681 52.7734 36.6406C54.0723 38.6003 55.0863 40.7422 55.8154 43.0664C56.5446 45.3906 56.8978 47.806 56.875 50.3125V52.5H52.5V50.3125C52.5 47.5098 51.9987 44.9121 50.9961 42.5195C49.9935 40.127 48.6149 38.042 46.8604 36.2646C45.1058 34.4873 43.0322 33.1087 40.6396 32.1289C38.2471 31.1491 35.638 30.6478 32.8125 30.625C30.2832 30.625 27.8906 31.0579 25.6348 31.9238C23.3789 32.7897 21.3737 34.0088 19.6191 35.5811C17.8646 37.1533 16.429 38.999 15.3125 41.1182C14.196 43.2373 13.501 45.5729 13.2275 48.125H35.376L27.5146 40.2637L30.625 37.1875L43.75 50.3125L30.625 63.4375L27.5146 60.3613L35.376 52.5H8.75V50.3125C8.75 47.806 9.10319 45.402 9.80957 43.1006C10.516 40.7992 11.5413 38.6686 12.8857 36.709C14.2301 34.7493 15.8366 33.0176 17.7051 31.5137C19.5736 30.0098 21.6813 28.7907 24.0283 27.8564C21.7952 26.2842 20.109 24.2904 18.9697 21.875H4.375V65.625H65.625V21.875Z"
      fill="#008B8B"
    />
  </svg>
);

export const DollarIcon = ({ className }: classNameProps) => (
  <svg
    className={cn(className)}
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M35.8333 0.833377C41.1708 0.830829 46.3477 2.65824 50.5008 6.01083C54.6539 9.36341 57.5321 14.0385 58.6553 19.2564C59.7785 24.4743 59.0789 29.9196 56.6731 34.684C54.2673 39.4485 50.3007 43.2442 45.435 45.438C43.8797 48.8764 41.5136 51.8864 38.5396 54.2096C35.5656 56.5329 32.0725 58.1001 28.3598 58.7769C24.6471 59.4537 20.8256 59.2198 17.2231 58.0954C13.6207 56.9709 10.3447 54.9895 7.67616 52.321C5.00762 49.6524 3.02618 46.3765 1.90175 42.774C0.777322 39.1715 0.543472 35.3501 1.22025 31.6374C1.89704 27.9247 3.46425 24.4315 5.7875 21.4575C8.11074 18.4835 11.1207 16.1174 14.5592 14.5621C16.4087 10.4697 19.3996 6.99776 23.1731 4.56265C26.9465 2.12754 31.3424 0.832683 35.8333 0.833377ZM24.1667 18.3334C21.8685 18.3334 19.5929 18.786 17.4697 19.6655C15.3465 20.5449 13.4173 21.834 11.7923 23.459C10.1673 25.084 8.87823 27.0132 7.99877 29.1364C7.11931 31.2596 6.66666 33.5352 6.66666 35.8334C6.66666 38.1315 7.11931 40.4071 7.99877 42.5303C8.87823 44.6535 10.1673 46.5827 11.7923 48.2077C13.4173 49.8328 15.3465 51.1218 17.4697 52.0013C19.5929 52.8807 21.8685 53.3334 24.1667 53.3334C28.808 53.3334 33.2591 51.4896 36.541 48.2077C39.8229 44.9259 41.6667 40.4747 41.6667 35.8334C41.6667 31.1921 39.8229 26.7409 36.541 23.459C33.2591 20.1771 28.808 18.3334 24.1667 18.3334ZM27.0833 21.25V24.1667H32.9167V30H21.25C20.8856 29.9994 20.5341 30.1352 20.2648 30.3807C19.9955 30.6262 19.8279 30.9637 19.7949 31.3266C19.762 31.6895 19.8662 32.0517 20.0869 32.3416C20.3076 32.6316 20.6289 32.8284 20.9875 32.8934L21.25 32.9167H27.0833C29.0172 32.9167 30.8719 33.6849 32.2393 35.0524C33.6068 36.4198 34.375 38.2745 34.375 40.2084C34.375 42.1423 33.6068 43.9969 32.2393 45.3644C30.8719 46.7318 29.0172 47.5 27.0833 47.5V50.4167H21.25V47.5H15.4167V41.6667H27.0833C27.4478 41.6674 27.7992 41.5316 28.0685 41.2861C28.3378 41.0405 28.5055 40.7031 28.5384 40.3401C28.5713 39.9772 28.4672 39.6151 28.2464 39.3251C28.0257 39.0351 27.7044 38.8383 27.3458 38.7734L27.0833 38.75H21.25C19.3161 38.75 17.4615 37.9818 16.094 36.6144C14.7266 35.2469 13.9583 33.3923 13.9583 31.4584C13.9583 29.5245 14.7266 27.6698 16.094 26.3024C17.4615 24.9349 19.3161 24.1667 21.25 24.1667V21.25H27.0833ZM35.8333 6.66671C33.362 6.66382 30.9182 7.1857 28.6636 8.19784C26.4091 9.20999 24.3951 10.6893 22.755 12.538C26.0516 12.3378 29.3531 12.8398 32.4413 14.0107C35.5294 15.1816 38.3338 16.9948 40.669 19.3302C43.0042 21.6657 44.817 24.4703 45.9875 27.5586C47.1581 30.6469 47.6597 33.9485 47.4592 37.245C50.111 34.8873 51.9835 31.7791 52.8282 28.3326C53.6729 24.8862 53.45 21.2644 52.1889 17.9476C50.9279 14.6308 48.6883 11.7757 45.7673 9.76095C42.8463 7.74624 39.3818 6.66712 35.8333 6.66671Z"
      fill="#008B8B"
    />
  </svg>
);

export const VanIcon = ({ className }: classNameProps) => (
  <svg
    className={cn(className)}
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.9999 40.8334H37.9166C41.1249 40.8334 43.7499 38.2084 43.7499 35V5.83337H17.4999C13.1249 5.83337 9.30413 8.25417 7.3208 11.8125"
      stroke="#008B8B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.83337 49.5834C5.83337 54.425 9.74171 58.3334 14.5834 58.3334H17.5C17.5 55.125 20.125 52.5 23.3334 52.5C26.5417 52.5 29.1667 55.125 29.1667 58.3334H40.8334C40.8334 55.125 43.4584 52.5 46.6667 52.5C49.875 52.5 52.5 55.125 52.5 58.3334H55.4167C60.2584 58.3334 64.1667 54.425 64.1667 49.5834V40.8334H55.4167C53.8125 40.8334 52.5 39.5209 52.5 37.9167V29.1667C52.5 27.5625 53.8125 26.25 55.4167 26.25H59.1791L54.1918 17.5292C53.1418 15.7209 51.2168 14.5834 49.1168 14.5834H43.75V35C43.75 38.2084 41.125 40.8334 37.9167 40.8334H35"
      stroke="#008B8B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.3333 64.1667C26.555 64.1667 29.1667 61.555 29.1667 58.3333C29.1667 55.1117 26.555 52.5 23.3333 52.5C20.1117 52.5 17.5 55.1117 17.5 58.3333C17.5 61.555 20.1117 64.1667 23.3333 64.1667Z"
      stroke="#008B8B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.6667 64.1667C49.8884 64.1667 52.5 61.555 52.5 58.3333C52.5 55.1117 49.8884 52.5 46.6667 52.5C43.445 52.5 40.8334 55.1117 40.8334 58.3333C40.8334 61.555 43.445 64.1667 46.6667 64.1667Z"
      stroke="#008B8B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M64.1667 35V40.8333H55.4167C53.8125 40.8333 52.5 39.5208 52.5 37.9167V29.1667C52.5 27.5625 53.8125 26.25 55.4167 26.25H59.1791L64.1667 35Z"
      stroke="#008B8B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.83337 23.3334H23.3334"
      stroke="#008B8B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.83337 32.0834H17.5"
      stroke="#008B8B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.83337 40.8334H11.6667"
      stroke="#008B8B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const HeadPhoneIcon = ({ className }: classNameProps) => (
  <svg
    className={cn(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.45999 18.49V15.57C5.45999 14.6 6.21999 13.73 7.29999 13.73C8.26999 13.73 9.13999 14.49 9.13999 15.57V18.38C9.13999 20.33 7.51999 21.9501 5.56999 21.9501C3.61999 21.9501 1.99999 20.32 1.99999 18.38V12.22C1.88999 6.60005 6.32999 2.05005 11.95 2.05005C17.57 2.05005 22 6.60005 22 12.11V18.2701C22 20.2201 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.2201 14.86 18.2701V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const PhoneIcon = ({ className }: classNameProps) => (
  <svg
    className={cn(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-miterlimit="10"
    />
    <path
      d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 9C22 5.13 18.87 2 15 2"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const WhatsappIcon = ({ className }: classNameProps) => (
  <svg
    className={cn(className)}
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_3254_22264)">
      <path
        d="M0.751136 17.2906C0.750316 20.2313 1.52449 23.1026 2.99658 25.6335L0.610352 34.2807L9.52653 31.9603C11.9926 33.2928 14.7557 33.991 17.5635 33.9912H17.5709C26.8402 33.9912 34.3855 26.5051 34.3895 17.3038C34.3913 12.8451 32.6434 8.65238 29.4676 5.49803C26.2925 2.34397 22.0696 0.606039 17.5702 0.604004C8.29992 0.604004 0.7551 8.08966 0.751273 17.2906"
        fill="url(#paint0_linear_3254_22264)"
      />
      <path
        d="M0.150646 17.2851C0.14969 20.3316 0.951615 23.3057 2.47619 25.9271L0.00439453 34.8843L9.24027 32.4808C11.7851 33.8579 14.6502 34.5839 17.5657 34.585H17.5732C27.175 34.585 34.9914 26.8297 34.9955 17.299C34.9972 12.68 33.1864 8.33665 29.8972 5.0693C26.6076 1.80236 22.2337 0.00189922 17.5732 0C7.96979 0 0.154474 7.75426 0.150646 17.2851ZM5.65095 25.4757L5.3061 24.9323C3.85642 22.6446 3.09127 20.0009 3.09236 17.2862C3.09537 9.3644 9.59114 2.91938 17.5787 2.91938C21.4468 2.92101 25.0821 4.4176 27.8163 7.13295C30.5504 9.84857 32.0549 13.4584 32.0539 17.2979C32.0504 25.2197 25.5545 31.6655 17.5732 31.6655H17.5675C14.9687 31.6641 12.42 30.9715 10.1972 29.6625L9.66823 29.3512L4.18747 30.7773L5.65095 25.4757Z"
        fill="url(#paint1_linear_3254_22264)"
      />
      <path
        d="M13.2187 10.0588C12.8926 9.33943 12.5494 9.32491 12.2393 9.3123C11.9853 9.30145 11.695 9.30226 11.4049 9.30226C11.1146 9.30226 10.6429 9.41065 10.2442 9.84273C9.8451 10.2752 8.72046 11.3203 8.72046 13.446C8.72046 15.5717 10.2804 17.626 10.4979 17.9146C10.7156 18.2026 13.5095 22.7043 17.9342 24.4361C21.6115 25.8753 22.3599 25.5891 23.158 25.5169C23.9562 25.445 25.7337 24.472 26.0963 23.4632C26.4592 22.4544 26.4592 21.5897 26.3504 21.409C26.2416 21.229 25.9513 21.1209 25.5159 20.9049C25.0804 20.6888 22.9402 19.6435 22.5413 19.4993C22.1421 19.3553 21.852 19.2834 21.5617 19.716C21.2713 20.1479 20.4377 21.1209 20.1836 21.409C19.9298 21.6978 19.6757 21.7338 19.2405 21.5177C18.8049 21.3009 17.4029 20.8452 15.7396 19.3734C14.4455 18.2282 13.5718 16.814 13.3178 16.3813C13.0639 15.9494 13.2906 15.7153 13.5089 15.5C13.7045 15.3064 13.9444 14.9955 14.1623 14.7433C14.3793 14.4909 14.4518 14.3109 14.5969 14.0228C14.7422 13.7344 14.6695 13.482 14.5608 13.2659C14.4518 13.0498 13.6058 10.9131 13.2187 10.0588Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_3254_22264"
        x1="1689.57"
        y1="3368.27"
        x2="1689.57"
        y2="0.604004"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1FAF38" />
        <stop offset="1" stop-color="#60D669" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_3254_22264"
        x1="1749.56"
        y1="3488.43"
        x2="1749.56"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F9F9F9" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
      <clipPath id="clip0_3254_22264">
        <rect width="35" height="35" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
