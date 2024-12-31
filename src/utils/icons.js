const Icon = ({ iconName, classStyle}) => {
    const IconList = {
     
        searchIcon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.79102 19.3799C14.7616 19.3799 18.791 15.3504 18.791 10.3799C18.791 5.40932 14.7616 1.37988 9.79102 1.37988C4.82045 1.37988 0.791016 5.40932 0.791016 10.3799C0.791016 15.3504 4.82045 19.3799 9.79102 19.3799Z" stroke="black" stroke-width="1.4218" stroke-miterlimit="10" />
                <path d="M21.7909 23.3282C22.1815 23.7187 22.8146 23.7187 23.2052 23.3282C23.5957 22.9377 23.5957 22.3045 23.2052 21.914L21.7909 23.3282ZM15.7909 17.3282L21.7909 23.3282L23.2052 21.914L17.2052 15.914L15.7909 17.3282Z" fill="black" />
            </svg>
        ),

        buttonArrow: (
            <svg width="29" height="10" viewBox="0 0 29 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2803 1L27.2403 4.96L23.2803 8.92" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M25.75 4.95996H1" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>

        ),

        arrowIcon: (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
            </svg>

        ),

        myWebsite: (
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.5017 13.2492C26.5017 5.93119 32.4329 0 39.7509 0C47.0688 0 53 5.93119 53 13.2492C53 20.5671 47.0688 26.4983 39.7509 26.4983C32.4329 26.4983 26.5017 20.5671 26.5017 13.2492ZM26.5017 13.2492C26.5017 5.93119 20.5671 0 13.2492 0C5.93119 0 0 5.93119 0 13.2492C0 20.5671 5.93119 26.4983 13.2492 26.4983C20.5671 26.4983 26.4983 20.5671 26.4983 13.2492H26.5017ZM13.2526 26.4983C5.93119 26.5017 0 32.4329 0 39.7509C0 47.0688 5.93119 53 13.2492 53C20.5671 53 26.4983 47.0688 26.4983 39.7509C26.4983 32.4329 20.5671 26.5017 13.2492 26.5017L13.2526 26.4983ZM39.7542 26.4983C32.4363 26.4983 26.5051 32.4295 26.5051 39.7475C26.5051 47.0654 32.4363 52.9966 39.7542 52.9966C47.0722 52.9966 53.0034 47.0654 53.0034 39.7475C53.0034 32.4295 47.0722 26.4983 39.7542 26.4983Z" fill="#00999E" />
            </svg>

        ),

        myCpl: (
            <svg width="53" height="48" viewBox="0 0 53 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.9951 0H24.4199C23.3168 0 22.415 0.90177 22.415 2.00493V11.209H13.2109C12.1078 11.209 11.206 12.1108 11.206 13.2139V22.418H2.00493C0.90177 22.418 0 23.3198 0 24.4229V45.9632C0 47.0664 0.90177 47.9681 2.00493 47.9681H28.5801C29.6832 47.9681 30.585 47.0664 30.585 45.9632V36.7591H39.7891C40.8922 36.7591 41.794 35.8574 41.794 34.7542V25.5501H50.9981C52.1012 25.5501 53.003 24.6484 53.003 23.5452V2.00493C53.003 0.90177 52.1012 0 50.9981 0H50.9951Z" fill="#00999E" />
            </svg>

        ),

        myWebsiteLeads: (
            <svg width="53" height="47" viewBox="0 0 53 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.32781 7.71056C9.14934 5.79345 11.5721 4.73709 14.1496 4.73709C16.7271 4.73709 19.1469 5.79345 20.9714 7.71056C22.781 9.61563 23.7841 12.1467 23.796 14.8403V14.8884H28.2992V14.8403C28.3111 12.1467 29.3112 9.61563 31.1238 7.71056C32.9453 5.79345 35.3681 4.73709 37.9456 4.73709C40.5231 4.73709 42.9429 5.79345 44.7674 7.71056C46.5889 9.62767 47.5919 12.1768 47.5919 14.8884H52.0922C52.0922 12.878 51.7172 10.9278 50.979 9.09196C50.2677 7.31931 49.2468 5.72724 47.9491 4.36089C46.6514 2.99454 45.1364 1.92012 43.4518 1.17073C41.7077 0.394256 39.8534 0 37.9456 0C36.0377 0 34.1835 0.394256 32.4393 1.17073C30.7547 1.92012 29.2427 2.99454 27.942 4.36089C27.2247 5.1163 26.5938 5.94393 26.0491 6.83176C25.5074 5.94393 24.8764 5.1163 24.1561 4.36089C22.8584 2.99454 21.3435 1.92012 19.6589 1.17073C17.9147 0.394256 16.0604 0 14.1526 0C12.2448 0 10.3905 0.394256 8.64634 1.17073C6.96172 1.92012 5.44973 2.99454 4.14907 4.36089C2.85138 5.72724 1.83049 7.31931 1.11914 9.09196C0.381002 10.9278 0.00598145 12.881 0.00598145 14.8884H4.50623C4.50623 12.1768 5.50926 9.62767 7.33079 7.71056H7.32781ZM47.9402 20.2183C46.6425 18.852 45.1275 17.7775 43.4429 17.0282C41.6988 16.2517 39.8445 15.8574 37.9367 15.8574C36.0288 15.8574 34.1746 16.2517 32.4304 17.0282C30.7458 17.7775 29.2338 18.852 27.9331 20.2183C27.2158 20.9737 26.5848 21.8014 26.0402 22.6892C25.4985 21.8014 24.8675 20.9737 24.1472 20.2183C22.8495 18.852 21.3346 17.7775 19.6499 17.0282C17.9058 16.2517 16.0515 15.8574 14.1437 15.8574C12.2358 15.8574 10.3816 16.2517 8.63743 17.0282C6.95281 17.7775 5.44082 18.852 4.14016 20.2183C2.84247 21.5847 1.82158 23.1767 1.11023 24.9494C0.372091 26.7852 -0.00292969 28.7385 -0.00292969 30.7458H4.49732C4.49732 28.0342 5.50035 25.4851 7.32188 23.568C9.14341 21.6509 11.5662 20.5945 14.1437 20.5945C16.7212 20.5945 19.141 21.6509 20.9655 23.568C22.7751 25.4731 23.7781 28.0041 23.7901 30.6977V30.7458H28.2933V30.6977C28.3052 28.0041 29.3052 25.4731 31.1178 23.568C32.9394 21.6509 35.3621 20.5945 37.9396 20.5945C40.5172 20.5945 42.9369 21.6509 44.7614 23.568C46.5859 25.4851 47.586 28.0342 47.586 30.7458H52.0863C52.0863 28.7354 51.7112 26.7852 50.9731 24.9494C50.2617 23.1767 49.2409 21.5847 47.9432 20.2183H47.9402ZM43.4429 32.8826C45.1275 33.632 46.6425 34.7065 47.9402 36.0728H47.9432C49.2409 37.4392 50.2617 39.0312 50.9731 40.8039C51.7112 42.6397 52.0863 44.5899 52.0863 46.6003H47.586C47.586 43.8887 46.583 41.3396 44.7614 39.4225C42.9369 37.5054 40.5172 36.449 37.9396 36.449C35.3621 36.449 32.9394 37.5054 31.1178 39.4225C29.3052 41.3275 28.3052 43.8586 28.2933 46.5522V46.6003H23.7901V46.5522C23.7781 43.8586 22.7751 41.3275 20.9655 39.4225C19.141 37.5054 16.7212 36.449 14.1437 36.449C11.5662 36.449 9.14341 37.5054 7.32188 39.4225C5.50035 41.3396 4.49732 43.8887 4.49732 46.6003H-0.00292969C-0.00292969 44.5929 0.372091 42.6397 1.11023 40.8039C1.82158 39.0312 2.84247 37.4392 4.14016 36.0728C5.44082 34.7065 6.95281 33.632 8.63743 32.8826C10.3816 32.1062 12.2358 31.7119 14.1437 31.7119C16.0515 31.7119 17.9058 32.1062 19.6499 32.8826C21.3346 33.632 22.8495 34.7065 24.1472 36.0728C24.8675 36.8282 25.4985 37.6558 26.0402 38.5437C26.5848 37.6558 27.2158 36.8282 27.9331 36.0728C29.2338 34.7065 30.7458 33.632 32.4304 32.8826C34.1746 32.1062 36.0288 31.7119 37.9367 31.7119C39.8445 31.7119 41.6988 32.1062 43.4429 32.8826Z" fill="#00999E" />
            </svg>

        ),

        myMarketing: (
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.8468 33.4154C51.8234 40.3919 54.92 48.6045 51.7639 51.7607C48.6078 54.9168 40.3952 51.8201 33.4186 44.8436C30.2228 41.6478 27.84 38.1909 26.5016 35.081C25.1631 38.1909 22.7803 41.6478 19.5845 44.8436C12.6079 51.8201 4.39537 54.9168 1.23924 51.7607C-1.9169 48.6045 1.17975 40.3919 8.1563 33.4154C11.3521 30.2196 14.809 27.8368 17.9189 26.4983C14.809 25.1599 11.3521 22.7771 8.1563 19.5813C1.17644 12.6047 -1.92021 4.39213 1.23593 1.23599C4.39207 -1.92015 12.6046 1.17651 19.5812 8.15306C22.777 11.3489 25.1598 14.8057 26.4983 17.9156C27.8367 14.8057 30.2195 11.3489 33.4153 8.15306C40.3919 1.17651 48.6078 -1.92015 51.7639 1.23599C54.92 4.39213 51.8234 12.6047 44.8468 19.5813C41.651 22.7771 38.1942 25.1599 35.0843 26.4983C38.1942 27.8368 41.651 30.2196 44.8468 33.4154Z" fill="#00999E" />
            </svg>

        ),

        facebook: (
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10.3038C20 4.74719 15.5229 0.242676 10 0.242676C4.47715 0.242676 0 4.74719 0 10.3038C0 15.3255 3.65684 19.4879 8.4375 20.2427V13.2121H5.89844V10.3038H8.4375V8.0872C8.4375 5.56564 9.9305 4.1728 12.2146 4.1728C13.3088 4.1728 14.4531 4.36931 14.4531 4.36931V6.84529H13.1922C11.95 6.84529 11.5625 7.6209 11.5625 8.41658V10.3038H14.3359L13.8926 13.2121H11.5625V20.2427C16.3432 19.4879 20 15.3257 20 10.3038Z" fill="white" />
        </svg>

        ),
        
        instagram: (
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0.242676H5C2.23858 0.242676 0 2.48126 0 5.24268V13.2427C0 16.0041 2.23858 18.2427 5 18.2427H13C15.7614 18.2427 18 16.0041 18 13.2427V5.24268C18 2.48126 15.7614 0.242676 13 0.242676ZM16.25 13.2427C16.2445 15.0353 14.7926 16.4872 13 16.4927H5C3.20735 16.4872 1.75549 15.0353 1.75 13.2427V5.24268C1.75549 3.45003 3.20735 1.99817 5 1.99268H13C14.7926 1.99817 16.2445 3.45003 16.25 5.24268V13.2427ZM13.75 5.49268C14.3023 5.49268 14.75 5.04496 14.75 4.49268C14.75 3.9404 14.3023 3.49268 13.75 3.49268C13.1977 3.49268 12.75 3.9404 12.75 4.49268C12.75 5.04496 13.1977 5.49268 13.75 5.49268ZM9 4.74268C6.51472 4.74268 4.5 6.7574 4.5 9.24268C4.5 11.728 6.51472 13.7427 9 13.7427C11.4853 13.7427 13.5 11.728 13.5 9.24268C13.5027 8.04838 13.0294 6.90225 12.1849 6.05776C11.3404 5.21327 10.1943 4.74002 9 4.74268ZM6.25 9.24268C6.25 10.7615 7.4812 11.9927 9 11.9927C10.5188 11.9927 11.75 10.7615 11.75 9.24268C11.75 7.72388 10.5188 6.49268 9 6.49268C7.4812 6.49268 6.25 7.72388 6.25 9.24268Z" fill="white" />
            </svg>

        ),

        twitter: (
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1761 0.242676H16.9362L10.9061 7.02008L18 16.2427H12.4456L8.0951 10.6493L3.11723 16.2427H0.35544L6.80517 8.99348L0 0.242676H5.69545L9.6279 5.3553L14.1761 0.242676ZM13.2073 14.6181H14.7368L4.86441 1.78196H3.2232L13.2073 14.6181Z" fill="white" />
            </svg>

        ),

        linkedin: (
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.242676C0.67157 0.242676 0 0.914246 0 1.74268V16.7427C0 17.5711 0.67157 18.2427 1.5 18.2427H16.5C17.3284 18.2427 18 17.5711 18 16.7427V1.74268C18 0.914246 17.3284 0.242676 16.5 0.242676H1.5ZM5.52076 4.2454C5.52639 5.20165 4.81061 5.79087 3.96123 5.78665C3.16107 5.78243 2.46357 5.1454 2.46779 4.24681C2.47201 3.40165 3.13998 2.72243 4.00764 2.74212C4.88795 2.76181 5.52639 3.40728 5.52076 4.2454ZM9.2797 7.00444H6.75971H6.7583V15.5643H9.4217V15.3646C9.4217 14.9847 9.4214 14.6047 9.4211 14.2246C9.4203 13.2108 9.4194 12.1959 9.4246 11.1824C9.426 10.9363 9.4372 10.6804 9.5005 10.4455C9.7381 9.56798 10.5271 9.00128 11.4074 9.14058C11.9727 9.22908 12.3467 9.55678 12.5042 10.0898C12.6013 10.423 12.6449 10.7816 12.6491 11.129C12.6605 12.1766 12.6589 13.2242 12.6573 14.2719C12.6567 14.6417 12.6561 15.0117 12.6561 15.3815V15.5629H15.328V15.3576C15.328 14.9056 15.3278 14.4537 15.3275 14.0018C15.327 12.8723 15.3264 11.7428 15.3294 10.6129C15.3308 10.1024 15.276 9.59898 15.1508 9.10538C14.9638 8.37128 14.5771 7.76378 13.9485 7.32508C13.5027 7.01287 13.0133 6.81178 12.4663 6.78928C12.404 6.78669 12.3412 6.7833 12.2781 6.77989C11.9984 6.76477 11.7141 6.74941 11.4467 6.80334C10.6817 6.95662 10.0096 7.30678 9.5019 7.92408C9.4429 7.99488 9.3852 8.06678 9.2991 8.17408L9.2797 8.19838V7.00444ZM2.68164 15.5671H5.33242V7.01001H2.68164V15.5671Z" fill="white" />
            </svg>

        ),

        youtube: (
            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5933 2.20301C20.4794 1.78041 20.2568 1.39501 19.9477 1.08518C19.6386 0.775338 19.2537 0.551868 18.8313 0.437007C17.2653 0.00700739 11.0003 7.59651e-06 11.0003 7.59651e-06C11.0003 7.59651e-06 4.73633 -0.00699261 3.16933 0.404007C2.74725 0.524154 2.36315 0.750785 2.0539 1.06214C1.74464 1.3735 1.52062 1.75913 1.40333 2.18201C0.99033 3.74801 0.98633 6.99601 0.98633 6.99601C0.98633 6.99601 0.98233 10.26 1.39233 11.81C1.62233 12.667 2.29733 13.344 3.15533 13.575C4.73733 14.005 10.9853 14.012 10.9853 14.012C10.9853 14.012 17.2503 14.019 18.8163 13.609C19.2388 13.4943 19.6241 13.2714 19.934 12.9622C20.2439 12.653 20.4677 12.2682 20.5833 11.846C20.9973 10.281 21.0003 7.03401 21.0003 7.03401C21.0003 7.03401 21.0203 3.76901 20.5933 2.20301ZM8.99633 10.005L9.00133 4.00501L14.2083 7.01001L8.99633 10.005Z" fill="white" />
            </svg>

        ),

        doubleArrow: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
                <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
        ),
    };

    return (
        <span className={`flex ${classStyle}`}>
            {iconName && IconList[iconName]}
        </span>
    );
};

export default Icon;