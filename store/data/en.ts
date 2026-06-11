const enTranslations = {
  public__api__errors__analytics__noData: "No data found",
  public__api__errors__appleAuthError:
    "Apple authorization was unsuccessful. Please use a valid Apple account.",
  public__api__errors__cancelSubscription__incorrectId:
    "Incorrect subscriptionId",
  public__api__errors__clients__codes__notFound: "Qr code(s) not found",
  "public__api__errors__clients__qr-code-previews__qrCodePreviewNotFound":
    "Something went wrong and the QR code preview cannot be displayed. Please reload the page and try again.",
  "public__api__errors__clients__qr-codes__qrCodeCannotBeActivated":
    "Something went wrong and the QR code cannot be activated. Please reload the page and try again.",
  "public__api__errors__clients__qr-codes__qrCodeCannotBeDeactivated":
    "Something went wrong and the QR code cannot be paused. Please reload the page and try again.",
  "public__api__errors__clients__qr-codes__qrCodeNotFound":
    "Something went wrong and the QR code cannot be found. Please reload the page and try again.",
  "public__api__errors__clients__qr-codes__selectAllOrIdsRequired":
    "You must provide either selectAll or ids.",
  public__api__errors__createQrCode__invalidCategory: "Invalid qr category",
  public__api__errors__extract__media:
    "Media paths deeper than 3 levels are not supported",
  public__api__errors__extract__media__notSupported:
    "Media paths with arrays on other than first or second level are not supported",
  public__api__errors__extract__media__path: "Wrong media path",
  public__api__errors__facebookAuthError:
    "Facebook authorization was unsuccessful. Please use a valid Facebook account.",
  public__api__errors__facebookEmailPermissionError:
    "Facebook authorization was unsuccessful. To authorize with Facebook you need to grant permission to use your email address.",
  "public__api__errors__forgot-password__invalidEmail":
    "The email address you entered is not valid. To reset your password, please enter a valid email address.",
  public__api__errors__generate__invoice__notFound: "Transaction not found",
  public__api__errors__generate__qr__notAllowed:
    "User not allowed to activate qr codes",
  public__api__errors__generateInvoice__notGenerated:
    "Invoice can not be generated",
  public__api__errors__googleAuthError:
    "Google authorization was unsuccessful. Please choose a valid Google account.",
  public__api__errors__initiatePayment__noUnpaid:
    "There are no unpaid invoices for customer",
  public__api__errors__login__incorrect2faCode: "Invalid code",
  public__api__errors__login__incorrectEmailOrPassword:
    "The email address or password you entered is incorrect. Please try again.",
  public__api__errors__login__maxLoginAttempts:
    "You have exceeded the maximum number of login attempts. Please try again later.",
  public__api__errors__login__multipleUsersWithSameEmail:
    "Login failed due to incorrect email casing. Please ensure that the email address matches the registered format (case sensitive).",
  public__api__errors__login__providersUserWithEmailDoesNotExist:
    "The email address linked to your account cannot be found in the list of My QR Code users. Please try logging in again or use the sign up form.",
  public__api__errors__payUnderSubscription:
    "An error occurred while trying to pay under subscription",
  public__api__errors__paypal__somethingWentWrong:
    "Something went wrong, and the transaction was canceled. Please try subscribing and submitting payment again.",
  public__api__errors__publish__validation: "Validation failed",
  public__api__errors__qrCode__qrCodeIds: "Incorrect qrCodeIds",
  public__api__errors__reactivateSubscription__incorrectId:
    "Incorrect subscriptionId",
  public__api__errors__reactivateSubscription__notReactivated:
    "Subscription can not be reactivated",
  "public__api__errors__reset-password-check__invalidLink":
    "The password reset link is invalid or has expired. Please select to reset your password again and use the new link sent to you by email.",
  public__api__errors__signup__invalidEmail:
    "You have entered an invalid email address. Please try again.",
  public__api__errors__signup__invalidPassword:
    "Your password must contain at least 8 characters, including both letters and numbers. Please try again.",
  public__api__errors__signup__providersUserAlreadyExists:
    "The email address linked to this account is already in use. You can try to log in with this email or you can use a different account to sign up.",
  public__api__errors__stripe__change:
    "User is not allowed to change payment method",
  public__api__errors__stripe__initiate:
    "User is not allowed to initiate payment",
  public__api__errors__stripe__signature__header:
    "Missing stripe-signature header",
  public__api__errors__stripe__somethingWentWrong:
    "Something went wrong, and the transaction was canceled. Please try subscribing and submitting payment again.",
  public__api__errors__stripeChangePaymentMethodError:
    "An error occurred while trying to change stripe payment method",
  public__api__errors__subscriptionReactivationError:
    "Something went wrong during subscription reactivation. Please try again. If you canceled your subscription using the PayPal dashboard, please contact our Customer Support Team.",
  public__api__errors__timestamps__incorrectFrom: "Incorrect timestamp from",
  public__api__errors__timestamps__incorrectOrder:
    "Timestamp From later than To",
  public__api__errors__timestamps__incorrectTo: "Incorrect timestamp to",
  public__api__errors__translation__notFound: "Translations file not found",
  public__api__errors__update__user__email: "Email already taken",
  public__api__errors__updateMedia__notFound: "Media not found",
  public__api__errors__user__settings__language: "Language is not supported",
  public__api__errors__user__settings__timezone: "Timezone is not supported",
  public__api__errors__user__subscription__empty:
    "User doesn't have a subscription",
  public__api__errors__users__doesNotExist: "User does not exist",
  public__api__errors__validate__fileName:
    "fileName={fileName} is not including supported projects",
  public__api__errors__validate__request: "Illegal request",
  public__api__errors__validateMedia__incorrectMediaId:
    "Incorrect media publicId",
  public__api__errors__verify__webhook__request: "Incorrect request",
  "public__api__messages__clients__qr-codes__qrCodeActivated":
    "QR code(s) activated",
  "public__api__messages__clients__qr-codes__qrCodeDeactivated":
    "QR code(s) paused",
  "public__api__messages__clients__qr-codes__qrCodeDeleted":
    "QR code(s) deleted",
  "public__api__messages__clients__qr-codes__qrCodeScansReset":
    "QR code(s) scans reset",
  "public__api__messages__clients__qr-codes__qrCodeUpdated": "QR code updated",
  "public__api__messages__common__qr-code-previews__qrCodePreviewUpdated":
    "Qr code preview updated",
  "public__api__messages__forgot-password__emailSent":
    "Email with reset password link has been sent",
  public__api__messages__logout__loggedOutSuccessfully:
    "You have successfully logged out",
  "public__api__messages__qr-categories__app__description":
    "Link to the iOS App Store/Google Play",
  "public__api__messages__qr-categories__app__title": "App",
  "public__api__messages__qr-categories__businessPage__description":
    "Profile your business information",
  "public__api__messages__qr-categories__businessPage__title": "Business Page",
  "public__api__messages__qr-categories__facebook__description":
    "Redirect users to your Facebook page",
  "public__api__messages__qr-categories__facebook__title": "Facebook",
  "public__api__messages__qr-categories__images__description":
    "Display an image gallery",
  "public__api__messages__qr-categories__images__title": "Images",
  "public__api__messages__qr-categories__menu__description":
    "Create a digital restaurant menu",
  "public__api__messages__qr-categories__menu__title": "Menu",
  "public__api__messages__qr-categories__pdf__description":
    "Showcase info in a PDF file",
  "public__api__messages__qr-categories__pdf__title": "PDF",
  "public__api__messages__qr-categories__plainText__description":
    "Display a body of text",
  "public__api__messages__qr-categories__plainText__title": "Simple Text",
  "public__api__messages__qr-categories__socialMedia__description":
    "Link to all your social media channels",
  "public__api__messages__qr-categories__socialMedia__title": "Social Media",
  "public__api__messages__qr-categories__url__description":
    "Link to a website of your choice",
  "public__api__messages__qr-categories__url__title": "Website URL",
  "public__api__messages__qr-categories__vCard__description":
    "Share your electronic business card",
  "public__api__messages__qr-categories__vCard__title": "vCard",
  "public__api__messages__qr-categories__video__description":
    "Share one or multiple videos",
  "public__api__messages__qr-categories__video__title": "Video",
  "public__api__messages__qr-categories__wifi__description":
    "Connect to a wireless network",
  "public__api__messages__qr-categories__wifi__title": "Wi-Fi",
  "public__api__messages__reset-password-check__validLink":
    "Password reset link is valid",
  "public__api__messages__reset-password__passwordSuccessfullyUpdated":
    "Password successfully updated",
  public__api__messages__subscriptionReactivated:
    "Your subscription has been successfully reactivated.",
  api__products__monthly_2__priceTitle:
    "{currencySymbol}{titlePrice}/mo\nInvoiced every month",
  api__products__quarterly_2__priceTitle: "{titlePrice}",
  auth__common__go_back: "Go back",
  public__dashboard__account__2fa__enable_dialog__step_2__description:
    "Open the authenticator app and scan the image on the right using your phone’s camera.",
  generator__content_form_section__videos__subtitle:
    "Upload or provide links to your videos - you can add up to 10 videos",
  public__product__annual_1__description:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unrestricted customization options\n- Unlimited access to analytics\n- Unlimited downloads\n- Full access to all download formats\n- Create any type of QR code you need\n- Pay {regularPrice} upfront and save 40%\n- Renews every year. You may cancel anytime.",
  public__product__annual_1__description__pln:
    '- Unlimited QR codes\n- Unlimited QR code scans\n- Unrestricted customization options\n- Unlimited access to analytics\n- Unlimited downloads\n- Full access to all download formats\n- Create any type of QR code you need\n- Pay {regularPrice} {currencySymbol} upfront and save 40%\n- Renews every $t(qr.duration; {"context": "{regularContext}", "count": {regularDuration} }). You may cancel anytime.',
  public__product__annual_1__name: "Yearly Plan",
  public__product__annual_1__priceTitle: "{titlePrice}<span>/mo</span>",
  public__product__annual_1__priceTitle__pln:
    "{titlePrice} {currencySymbol}<span>/mo</span>",
  public__product__annual_1__recurrent_name: "Yearly Plan",
  public__product__annual_1_monthly_increased_price__description:
    '- Unlimited QR codes\n- Unlimited QR code scans\n- Unrestricted customization options\n- Unlimited access to analytics\n- Unlimited downloads\n- Full access to all download formats\n- Create any type of QR code you need\n- Pay {regularPrice} upfront and save 50%\n- Renews every $t(qr.duration; {"context": "{regularContext}", "count": {regularDuration} }). You may cancel anytime.',
  public__product__annual_1_monthly_increased_price__description__pln:
    '- Unlimited QR codes\n- Unlimited QR code scans\n- Unrestricted customization options\n- Unlimited access to analytics\n- Unlimited downloads\n- Full access to all download formats\n- Create any type of QR code you need\n- Pay {regularPrice} {currencySymbol} upfront and save 50%\n- Renews every $t(qr.duration; {"context": "{regularContext}", "count": {regularDuration} }). You may cancel anytime.',
  public__product__annual_1_monthly_increased_price__name: "Yearly Plan",
  public__product__annual_1_monthly_increased_price__price_title:
    "{titlePrice}<span>/mo</span>",
  public__product__annual_1_monthly_increased_price__price_title__pln:
    "{titlePrice} {currencySymbol}<span>/mo</span>",
  public__product__annual_1_monthly_increased_price__recurrent_name:
    "Yearly Plan",
  public__product__annual_1_price_increased__description:
    '- Unlimited QR codes\n- Unlimited QR code scans\n- Unrestricted customization options\n- Unlimited access to analytics\n- Unlimited downloads\n- Full access to all download formats\n- Create any type of QR code you need\n- Pay {regularPrice} upfront and save 50%\n- Renews every $t(qr.duration; {"context": "{regularContext}", "count": {regularDuration} }). You may cancel anytime.',
  public__product__annual_1_price_increased__name: "Yearly Plan",
  public__product__annual_1_price_increased__price_title:
    "{titlePrice}<span>/mo</span>",
  public__product__annual_1_price_increased__recurrent_name: "Yearly Plan",
  public__product__annual_1_some_days_free__description:
    "Product description for annual subscription in some days free flow",
  public__product__annual_1_some_days_free__name:
    "Product name for annual subscription in some days free flow",
  public__product__annual_1_some_days_free__price_title:
    "Product price title for annual subscription in some days free flow",
  public__product__annual_1_some_days_free__recurrent_name:
    "Product recurrent name for annual subscription in some days free flow",
  public__product__annual_1_some_days_free_flow__description:
    "- Create unlimited QR codes\n- Unrestricted editing\n- Unlimited scans\n- Full library access\n- Multiple download formats\n- Advanced QR analytics\n- Premium support\n- Cancel anytime",
  public__product__annual_1_some_days_free_flow__name: "Annual",
  public__product__annual_1_some_days_free_flow__price_title:
    "{titlePrice} / mo\nInvoiced every year",
  public__product__annual_1_some_days_free_flow__recurrent_name: "Yearly plan",
  public__product__annual_1_unlock__description:
    "- Create unlimited QR codes\n- Unrestricted editing\n- Unlimited scans\n- Full library access\n- Multiple download formats\n- Advanced QR analytics\n- Premium support\n- Cancel anytime",
  public__product__annual_1_unlock__name: "Annual",
  public__product__annual_1_unlock__price_title:
    "{titlePrice} / mo\nInvoiced every year",
  public__product__annual_1_unlock__recurrent_name: "Yearly plan",
  public__product__monthly_1__description:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unlimited access to analytics\n- Unrestricted customization options\n- Unlimited downloads\n- Full access to all download formats\n- Create all types of QR codes you need",
  public__product__monthly_1__description__pln:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unlimited access to analytics\n- Unrestricted customization options\n- Unlimited downloads\n- Full access to all download formats\n- Create all types of QR codes you need",
  public__product__monthly_1__name: "Full monthly access",
  public__product__monthly_1__priceTitle: "{titlePrice}",
  public__product__monthly_1__priceTitle__pln: "{titlePrice} {currencySymbol}",
  public__product__monthly_1__recurrent_name: "Full monthly access",
  public__product__monthly_1_monthly_increased_price__description:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unlimited access to analytics\n- Unrestricted customization options\n- Unlimited downloads\n- Full access to all download formats\n- Create all types of QR codes you need",
  public__product__monthly_1_monthly_increased_price__description__pln:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unlimited access to analytics\n- Unrestricted customization options\n- Unlimited downloads\n- Full access to all download formats\n- Create all types of QR codes you need",
  public__product__monthly_1_monthly_increased_price__name:
    "Full monthly access",
  public__product__monthly_1_monthly_increased_price__price_title:
    "{titlePrice}",
  public__product__monthly_1_monthly_increased_price__price_title__pln:
    "{titlePrice} {currencySymbol}",
  public__product__monthly_1_monthly_increased_price__recurrent_name:
    "Full monthly access",
  public__product__monthly_1_price_increased__description:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unlimited access to analytics\n- Unrestricted customization options\n- Unlimited downloads\n- Full access to all download formats\n- Create all types of QR codes you need",
  public__product__monthly_1_price_increased__name: "Full monthly access",
  public__product__monthly_1_price_increased__price_title: "{titlePrice}",
  public__product__monthly_1_price_increased__recurrent_name:
    "Full monthly access",
  public__product__monthly_1_some_days_free_flow__description:
    "- Create unlimited QR codes\n- Unrestricted editing\n- Unlimited scans\n- Full library access\n- Multiple download formats\n- Advanced QR analytics\n- Premium support\n- Cancel anytime",
  public__product__monthly_1_some_days_free_flow__name: "Monthly",
  public__product__monthly_1_some_days_free_flow__price_title:
    "{titlePrice} / mo \nInvoiced every month",
  public__product__monthly_1_some_days_free_flow__recurrent_name:
    "Full monthly access",
  public__product__monthly_1_unlock__description:
    "- Create unlimited QR codes\n- Unrestricted editing\n- Unlimited scans\n- Full library access\n- Multiple download formats\n- Advanced QR analytics\n- Premium support\n- Cancel anytime",
  public__product__monthly_1_unlock__name: "Monthly",
  public__product__monthly_1_unlock__price_title:
    "{titlePrice} / mo\nInvoiced every month",
  public__product__monthly_1_unlock__recurrent_name: "Full monthly access",
  public__product__monthly_2__description:
    "- Create one QR code\n- Limited QR code scans\n- Limited access to analytics ",
  public__product__monthly_2__description__pln:
    "- Create one QR code\n- Limited QR code scans\n- Limited access to analytics ",
  public__product__monthly_2__name: "14-Day Limited Access",
  public__product__monthly_2__priceTitle: "{titlePrice}",
  public__product__monthly_2__priceTitle__pln: "{titlePrice} {currencySymbol}",
  public__product__monthly_2__recurrent_name: "Full monthly access",
  public__product__monthly_2_monthly_increased_price__description:
    "- Create one QR code\n- Limited QR code scans\n- Limited access to analytics ",
  public__product__monthly_2_monthly_increased_price__name:
    "14-Day Limited Access",
  public__product__monthly_2_monthly_increased_price__price_title:
    "{titlePrice}",
  public__product__monthly_2_monthly_increased_price__price_title__pln:
    "{titlePrice} {currencySymbol}",
  public__product__monthly_2_monthly_increased_price__recurrent_name:
    "Full monthly access",
  public__product__monthly_2_price_increased__description:
    "- Create one QR code\n- Limited QR code scans\n- Limited access to analytics",
  public__product__monthly_2_price_increased__description__public:
    "- Create one QR code\n- Limited QR code scans\n- Limited access to analytics\n- After {trialDuration} days, renews to {regularPrice} every {regularDuration} weeks. Cancel anytime.",
  public__product__monthly_2_price_increased__name: "14-Day Limited Access",
  public__product__monthly_2_price_increased__price_title: "{titlePrice}",
  public__product__monthly_2_price_increased__recurrent_name:
    "Full monthly access",
  public__product__monthly_2_price_increased_7__name: "7-Day Limited Access",
  public__product__monthly_2_price_increased_7__price_title: "{titlePrice}",
  public__product__monthly_2_price_increased_7__recurrent_name:
    "Full monthly access",
  public__product__monthly_3__description:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unrestricted customization options\n- Unlimited access to analytics\n- Unlimited downloads\n- Full access to all download formats\n- Create any type of QR code you need",
  public__product__monthly_3__description__pln:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unrestricted customization options\n- Unlimited access to analytics\n- Unlimited downloads\n- Full access to all download formats\n- Create any type of QR code you need",
  public__product__monthly_3__name: "14-Day Full Access",
  public__product__monthly_3__priceTitle: "{titlePrice}",
  public__product__monthly_3__priceTitle__pln: "{titlePrice} {currencySymbol}",
  public__product__monthly_3__recurrent_name: "Full monthly access",
  public__product__monthly_3_monthly_increased_price__description:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unrestricted customization options\n- Unlimited access to analytics\n- Unlimited downloads\n- Full access to all download formats\n- Create any type of QR code you need",
  public__product__monthly_3_monthly_increased_price__name:
    "14-Day Full Access",
  public__product__monthly_3_monthly_increased_price__price_title:
    "{titlePrice}",
  public__product__monthly_3_monthly_increased_price__price_title__pln:
    "{titlePrice} {currencySymbol}",
  public__product__monthly_3_monthly_increased_price__recurrent_name:
    "Full monthly access",
  public__product__monthly_3_price_increased__description:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unrestricted customization options\n- Unlimited access to analytics\n- Unlimited downloads\n- Full access to all download formats\n- Create any type of QR code you need",
  public__product__monthly_3_price_increased__name: "14-Day Full Access",
  public__product__monthly_3_price_increased__price_title: "{titlePrice}",
  public__product__monthly_3_price_increased__recurrent_name:
    "Full monthly access",
  public__product__monthly_3_price_increased_7__name: "7-Day Full Access",
  public__product__monthly_3_price_increased_7__price_title: "{titlePrice}",
  public__product__monthly_3_price_increased_7__recurrent_name:
    "Full monthly access",
  public__product__quarterly_1__description:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unlimited access to analytics\n- Unrestricted customization options\n- Unlimited downloads\n- Full access to all download formats\n- Create all types of QR codes you need",
  public__product__quarterly_1__name: "Full quarterly access",
  public__product__quarterly_1__priceTitle: "{titlePrice}",
  public__product__quarterly_1__recurrent_name: "Full quarterly access",
  public__product__quarterly_1_some_days_free__description:
    "Product description for quarterly subscription in some days free flow",
  public__product__quarterly_1_some_days_free__name:
    "Product name for quarterly subscription in some days free flow",
  public__product__quarterly_1_some_days_free__price_title:
    "Product price title for quarterly subscription in some days free flow",
  public__product__quarterly_1_some_days_free__recurrent_name:
    "Product recurrent name for quarterly subscription in some days free flow",
  public__product__quarterly_1_some_days_free_flow__description:
    "- Create unlimited QR codes\n- Unrestricted editing\n- Unlimited scans\n- Full library access\n- Multiple download formats\n- Advanced QR analytics\n- Premium support\n- Cancel anytime",
  public__product__quarterly_1_some_days_free_flow__name: "Quarterly",
  public__product__quarterly_1_some_days_free_flow__price_title:
    "{titlePrice} / mo\nInvoiced every quarter",
  public__product__quarterly_1_some_days_free_flow__recurrent_name:
    "Full quarterly access",
  public__product__quarterly_1_unlock__description:
    "- Create unlimited QR codes\n- Unrestricted editing\n- Unlimited scans\n- Full library access\n- Multiple download formats\n- Advanced QR analytics\n- Premium support\n- Cancel anytime",
  public__product__quarterly_1_unlock__name: "Quarterly",
  public__product__quarterly_1_unlock__price_title:
    "{titlePrice} / mo\nInvoiced every quarter",
  public__product__quarterly_1_unlock__recurrent_name: "Full quarterly access",
  public__product__quarterly_2__description:
    "- Create one QR code\n- Limited QR code scans\n- Limited access to analytics",
  public__product__quarterly_2__name: "14-Day Limited Access",
  public__product__quarterly_2__recurrent_name: "Full quarterly access",
  public__product__quarterly_3__description:
    "- Unlimited QR codes\n- Unlimited QR code scans\n- Unrestricted customization options\n- Unlimited access to analytics\n- Unlimited downloads\n- Full access to all download formats\n- Create any type of QR code you need",
  public__product__quarterly_3__name: "14-Day Full Access",
  public__product__quarterly_3__priceTitle: "{titlePrice}",
  public__product__quarterly_3__recurrent_name: "Full quarterly access",
  public__brand__name: "QRcreate",
  public__faq_section__description:
    "Get answers to your questions about QR codes",
  public__meta__description:
    "Create custom QR codes with QRcreate - The best QR code generator",
  public__meta__title: "QRcreate - QR Code Generator",
  public__organization__email: "support@qrcreate.com",
  public__organization__logo_path: "/clone1/logo.svg",
  public__organization__phone: "+1-555-123-4567",
  public__page__not_found__qr_code__title: "AI-powered QR Codes, made simple",
  public__seo_section__steps_to_create_qr_code__step_4:
    "Name your code, and insert the link and/or additional options.",
  public__seo_section__steps_to_create_qr_code__title:
    "Here is a full list of steps to create a QR code:",
  public__qr__account__popup__deactivate2fa__success__button: "Got it!",
  public__qr__breadcrumbs__prices: "Prices",
  public__qr__codes__not__found__description_v2:
    "If you are the owner of this QR code, <Link>log in</Link> to reactivate it.",
  public__qr__codes__not__found__title:
    "This QR Code has been deactivated for some reason",
  public__qr__codes__popup__remaining_many: "{many_days} days remaining",
  public__qr__codes__table__title__qr__type: "QR code type",
  public__qr__common__close: "Close",
  public__qr__filters__all__other: "Other",
  public__qr__filters__all__other_countries: "Other",
  public__qr__manage__qr__codes: "Manage my QR codes",
  public__qr__page__billing__activeperiod:
    "{qr.page.billing.activeperiod, plural, one {Valid until {{date}} ({{difference}} day left)} other {Valid until {{date}} ({{difference}} days left)}}",
  public__qr__page__landing__seo__builder__app__description:
    "Add content to the App QR code",
  public__qr__page__landing__seo__builder__app__title:
    "Link to the iOS App Store/Google Play - My QR Code",
  public__qr__page__landing__seo__builder__business__description:
    "Add content to the Business QR code",
  public__qr__page__landing__seo__builder__business__title:
    "Profile your business information - My QR Code",
  public__qr__page__landing__seo__builder__facebook__description:
    "Add content to the Facebook QR code",
  public__qr__page__landing__seo__builder__facebook__title:
    "Redirect users to your Facebook page - My QR Code",
  public__qr__page__landing__seo__builder__images__description:
    "Add content to the Image QR code",
  public__qr__page__landing__seo__builder__images__title:
    "Display an image gallery - My QR Code",
  public__qr__page__landing__seo__builder__menu__description:
    "Add content to the Menu QR code",
  public__qr__page__landing__seo__builder__menu__title:
    "Create a digital restaurant menu - My QR Code",
  public__qr__page__landing__seo__builder__pdf__description:
    "Add content to the PDF QR code",
  public__qr__page__landing__seo__builder__pdf__title:
    "Showcase info in a PDF file - My QR Code",
  public__qr__page__landing__seo__builder__social__description:
    "Add content to the Social Media QR code",
  public__qr__page__landing__seo__builder__social__title:
    "Link to all your social media channels - My QR Code",
  public__qr__page__landing__seo__builder__text__description:
    "Add content to the Simple Text QR code",
  public__qr__page__landing__seo__builder__text__title:
    "Display a body of text - My QR Code",
  public__qr__page__landing__seo__builder__vcard__description:
    "Add content to the vCard QR code",
  public__qr__page__landing__seo__builder__vcard__title:
    "Share your electronic business card - My QR Code",
  public__qr__page__landing__seo__builder__video__description:
    "Add content to the Video QR code",
  public__qr__page__landing__seo__builder__video__title:
    "Share one or multiple videos - My QR Code",
  public__qr__page__landing__seo__builder__website__description:
    "Add content to the Website URL QR code",
  public__qr__page__landing__seo__builder__website__title:
    "Link to a website of your choice - My QR Code",
  public__qr__page__landing__seo__builder__wifi__description:
    "Add content to the Wi-Fi QR code",
  public__qr__page__landing__seo__builder__wifi__title:
    "Connect to a wireless network - My QR Code",
  public__qr__page__landing__seo__cancel__description:
    "Manage Your Subscription - QR code generator by My QR Code. Cancel subscription any time. Upgrade your plan to unlock full benefits of dynamic QR codes!",
  public__qr__page__landing__seo__cancel__title:
    "Manage Your Subscription - QR code generator by My QR Code",
  public__qr__page__landing__seo__description:
    "QR Code Generator: Generate QR codes like a pro for restaurants, vCards, events, and businesses with custom designs, editable links, logos, & colors. Make free art QR codes using our AI QR code generator.",
  public__qr__page__landing__seo__prices__description:
    "Pricing plans for QR Code Generator by My QR Code. Select between Limited access, Full access or Yearly Plan. 30-day money-back guarantee.",
  public__qr__page__landing__seo__prices__title:
    "QR code generator pricing plans | Select between Limited access, Full access or Yearly Plan",
  public__qr__page__landing__seo__signup__description:
    "Create a FREE account to download, edit and manage your QR codes - QR Code Generator",
  public__qr__page__landing__seo__signup__title:
    "QR Code Generator Sign Up | My QR Code",
  public__qr__page__landing__seo__title:
    "QR Code Generator: Turn any link, vCard or file into a QR code",
  public__qr__page__offer__success__page__description:
    "Your account has now been upgraded and all QR codes are now active! You can continue using all of My QR Code functions.",
  public__qr__page__offer__success__page__title: "Success!",
  public__qr__page__subscription__save50: "Save 50%",
  public__qr__page__subscription__stripeForm__info__section2__unified__v2:
    'Your payment will appear as "myqrcode.com" on your credit card statement. After {trialDuration} days you will be billed {regularPrice} every {regularDuration} weeks until your subscription ends. You can cancel anytime. For any enquiries, you can contact us on support@myqrcode.com or by phone on +1-631-892-9925.',
  public__qr__page__subscription__submit__button_new: "Submit payment",
  public__qr__page__subscription__summary__duration__plan:
    "{count, plural, one {{{duration}} Month Plan} other {{{duration}} Months Plan}}",
  public__qr__page__subscription__title: "Most popular",
  public__qr__page__upgrade__title: "Plans & Pricing",
  public__qr__pages__subscription__pricing__titles:
    "Select a plan to access, download & manage your QR codes",
  public__qr__statistics__cards__qr__types: "Total number of QR codes",
  public__qr__statistics__cards__total__scans: "Total scans",
  public__qr__statistics__cards__unique__scans: "Unique scans",
  public__qr__statistics__download: "Export data",
  public__qr__statistics__filter__cities__title: "Cities",
  public__qr__statistics__filter__countries__title: "Countries",
  public__qr__statistics__filter__download__csv: "Download CSV",
  public__qr__statistics__filter__download__xlsx: "Download XLSX",
  public__qr__statistics__filter__os__title: "Operating systems",
  public__qr__statistics__filter__qr__title: "QR code name",
  public__qr__stats__chart__cities__title: "Scans by city",
  public__qr__stats__chart__countries__title: "Scans by country",
  public__qrBuilder__templateForms__businessPage__fields__schedule__buttons__add:
    "Add time range",
  public__qrBuilder__templateForms__shared__errors__link__invalid:
    "You have entered an invalid link. Please try again.",
  public__qrBuilder__validationModal__maliciousUrls__description:
    "You have entered an invalid URL. Please use another link.",
  public__report__datetime: "Date and time of scanning",
  public__stripe_cardCvc_incomplete_cvc:
    "Your card's security code is incomplete.",
  public__stripe_cardExpiry_incomplete_expiry:
    "Your card's expiration date is incomplete.",
  public__stripe_cardExpiry_invalid_expiry_month:
    "Your card's expiration month is invalid.",
  public__stripe_cardExpiry_invalid_expiry_month_past:
    "Your card's expiration date is in the past.",
  public__stripe_cardExpiry_invalid_expiry_year:
    "Your card's expiration year is invalid.",
  public__stripe_cardExpiry_invalid_expiry_year_past:
    "Your card's expiration year is in the past.",
  public__stripe_cardNumber_incomplete_number:
    "Your card number is incomplete.",
  public__stripe_cardNumber_invalid_number: "Your card number is invalid.",
  public__test__other__key: "test",
  api__product__monthly_3_price_increased__description__public:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited access to analytics</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create any type of QR code you need</li>\n<li>After {trialDuration} days, renews to \n  {regularPrice} every {regularDuration} weeks. \n  Cancel anytime.</li>",
  api__products__annual_1__description:
    '<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited access to analytics</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create any type of QR code you need</li>\n<li>Pay {regularPrice} upfront and save 40%</li>\n<li>Renews every $t(qr.duration; {"context": "{regularContext}", "count": {regularDuration} }). You may cancel anytime.</li>',
  api__products__annual_1__priceTitle:
    "{titlePrice}<span>/mo</span>\nInvoiced every year",
  api__products__annual_1_monthly_increased_price__description:
    '<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited access to analytics</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create any type of QR code you need</li>\n<li>Pay {regularPrice} upfront and save 50%</li>\n<li>Renews every $t(qr.duration; {"context": "{regularContext}", "count": {regularDuration} }). You may cancel anytime.</li>',
  api__products__annual_1_monthly_increased_price__price_title:
    "{titlePrice}<span>/mo</span>\nInvoiced every year",
  api__products__annual_1_price_increased__price_title:
    "{titlePrice}<span>/mo</span>\nInvoiced every year",
  api__products__annual_1_some_days_free_flow__description:
    "<li>Create unlimited QR codes</li>\n<li>Unrestricted editing</li>\n<li>Unlimited scans</li>\n<li>Full library access</li>\n<li>Multiple download formats</li>\n<li>Advanced QR analytics</li>\n<li>Premium support</li>\n<li>Cancel anytime</li>",
  api__products__annual_1_unlock__description:
    "<li>Create unlimited QR codes</li>\n<li>Unrestricted editing</li>\n<li>Unlimited scans</li>\n<li>Full library access</li>\n<li>Multiple download formats</li>\n<li>Advanced QR analytics</li>\n<li>Premium support</li>\n<li>Cancel anytime</li>",
  api__products__annual_price_increased__description:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited access to analytics</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create any type of QR code you need</li>\n<li>Pay {regularPrice} upfront and save 50%</li>\n<li>Renews every year. You may cancel anytime.</li>",
  api__products__annual_price_increased__price_title:
    "{titlePrice} <span>/ mo</span>",
  api__products__monthly_1__description:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unlimited access to analytics</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create all types of QR codes you need</li>",
  api__products__monthly_1__priceTitle: "{titlePrice}/mo\nInvoiced every month",
  api__products__monthly_1_monthly_increased_price__description:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unlimited access to analytics</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create all types of QR codes you need</li>",
  api__products__monthly_1_monthly_increased_price__price_title:
    "{titlePrice}/mo\nInvoiced every month",
  api__products__monthly_1_price_increased__description:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unlimited access to analytics</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create all types of QR codes you need</li>",
  api__products__monthly_1_price_increased__price_title:
    "{titlePrice}/mo\nInvoiced every month",
  api__products__monthly_1_some_days_free_flow__description:
    "<li>Create unlimited QR codes</li>\n<li>Unrestricted editing</li>\n<li>Unlimited scans</li>\n<li>Full library access</li>\n<li>Multiple download formats</li>\n<li>Advanced QR analytics</li>\n<li>Premium support</li>\n<li>Cancel anytime</li>",
  api__products__monthly_1_some_days_free_flow__priceTitle:
    "{titlePrice} / mo \nInvoiced every month",
  api__products__monthly_1_unlock__description:
    "<li>Create unlimited QR codes</li>\n<li>Unrestricted editing</li>\n<li>Unlimited scans</li>\n<li>Full library access</li>\n<li>Multiple download formats</li>\n<li>Advanced QR analytics</li>\n<li>Premium support</li>\n<li>Cancel anytime</li>",
  api__products__monthly_2__description:
    "<li>Create one QR code</li>\n<li>Limited QR code scans</li>\n<li>Limited access to analytics</li>",
  api__products__monthly_2_monthly_increased_price__description:
    "<li>Create one QR code</li>\n<li>Limited QR code scans</li>\n<li>Limited access to analytics</li>",
  api__products__monthly_2_monthly_increased_price__price_title:
    "{titlePrice}/mo\nInvoiced every month",
  api__products__monthly_2_price_increased__description:
    "<li>Create one QR code</li>\n<li>Limited QR code scans</li>\n<li>Limited access to analytics</li>",
  api__products__monthly_2_price_increased__description__public:
    "<li>Create one QR code</li>\n<li>Limited QR code scans</li>\n<li>Limited access to analytics</li>\n<li>After {trialDuration} days, renews to {regularPrice} every {regularDuration} weeks. Cancel anytime.</li>",
  api__products__monthly_3__description:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited access to analytics</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create any type of QR code you need</li>",
  api__products__monthly_3__priceTitle: "{titlePrice}/mo\nInvoiced every month",
  api__products__monthly_3_monthly_increased_price__description:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited access to analytics</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create any type of QR code you need</li>",
  api__products__monthly_3_monthly_increased_price__price_title:
    "{titlePrice}/mo\nInvoiced every month",
  api__products__monthly_3_price_increased__description:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited access to analytics</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create any type of QR code you need</li>",
  api__products__quarterly_1__description:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unlimited access to analytics</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create all types of QR codes you need</li>",
  api__products__quarterly_1__priceTitle:
    "{titlePrice}/mo\nInvoiced every quarter",
  api__products__quarterly_1_some_days_free_flow__description:
    "<li>Create unlimited QR codes</li>\n<li>Unrestricted editing</li>\n<li>Unlimited scans</li>\n<li>Full library access</li>\n<li>Multiple download formats</li>\n<li>Advanced QR analytics</li>\n<li>Premium support</li>\n<li>Cancel anytime</li>",
  api__products__quarterly_1_unlock__description:
    "<li>Create unlimited QR codes</li>\n<li>Unrestricted editing</li>\n<li>Unlimited scans</li>\n<li>Full library access</li>\n<li>Multiple download formats</li>\n<li>Advanced QR analytics</li>\n<li>Premium support</li>\n<li>Cancel anytime</li>",
  api__products__quarterly_2__description:
    "<li>Create one QR code</li>\n<li>Limited QR code scans</li>\n<li>Limited access to analytics</li>",
  api__products__quarterly_3__description:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited access to analytics</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create any type of QR code you need</li>",
  api__products__quarterly_3__priceTitle:
    "{titlePrice}/mo\nInvoiced every quarter",
  auth__check_inbox__description:
    "If an account with that email address exists, we have sent an email with the instructions to recover your password.",
  auth__check_inbox__title: "Check your inbox",
  auth__common__back: "Back",
  auth__common__input_login_placeholder: "Enter your email",
  auth__common__input_login_validation__invalid:
    "Please enter a valid email address",
  auth__common__input_login_validation__required: "Email is required",
  auth__common__input_password_placeholder: "Enter your password",
  auth__common__input_password_validation__invalid:
    "Your password must contain a combination of both letters and numbers.",
  auth__common__input_password_validation__match:
    "Passwords must match. Please try again.",
  auth__common__input_password_validation__max_length:
    "Your password cannot be more than 100 characters long.",
  auth__common__input_password_validation__min_length:
    "Your password must contain at least 8 characters.",
  auth__common__input_password_validation__required:
    "Password is required. This field cannot be left blank.",
  auth__common__login_submit: "Log in",
  auth__common__separator_title: "OR",
  auth__login_2fa__cta_lost:
    "If you've lost your 2FA credentials, please reach out to our <support>support</support> team for assistance.",
  auth__login_2fa__cta_lost_action: "support",
  auth__login_2fa__description:
    "Enter the Code from Your Two-Factor Authentication App.",
  auth__login_2fa__input_2fa_error: "Invalid code",
  auth__login__cta_forgot: "Forgot your password?",
  auth__login__cta_forgot_action: "Click here",
  auth__login__cta_signup: "Don’t have an account?",
  auth__login__cta_signup_action: "Sign up",
  auth__login__title: "Welcome back!",
  auth__recover_password__description:
    "Enter your email and we will send you a link to reset your password",
  auth__recover_password__submit: "Send reset link",
  auth__recover_password__title: "Recover password",
  auth__reset_password__description:
    "Enter a new password into both fields bellow",
  auth__reset_password__input_confirm_password_placeholder: "Confirm password",
  auth__reset_password__input_password_placeholder: "Password",
  auth__reset_password__submit: "Confirm",
  auth__reset_password__title: "Create new password",
  auth__reset_password_expired__description:
    "Sorry, the link is no longer valid. Request another one",
  auth__reset_password_expired__submit: "Request new link",
  auth__reset_password_expired__title: "Expired link",
  auth__signup__cta: "Already have an account?",
  auth__signup__cta_action: "Log In",
  auth__signup__description:
    "Create a FREE account to download, edit and manage your QR codes",
  auth__signup__disclaimer:
    "By clicking {auth__signup__submit}, you confirm that you have read and consent to our <terms>Terms and conditions</terms> and <privacy>Privacy policy</privacy>",
  auth__signup__privacy_policy: "Privacy policy",
  auth__signup__social_apple: "Continue with Apple",
  auth__signup__social_facebook: "Continue with Facebook",
  auth__signup__social_google: "Continue with Google",
  auth__signup__submit: "Create Account",
  auth__signup__terms: "Terms and conditions",
  auth__signup__title: "Sign up",
  auth__signup_welcome__description:
    "Join millions of users already using the smartest QR Code Generator!",
  auth__signup_welcome__description_v0:
    "Enter your email address to receive your QR code",
  auth__signup_welcome__secondary__feature:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited access to analytics</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>",
  auth__signup_welcome__secondary__feature1: "Receive your QR code by email",
  auth__signup_welcome__secondary__feature2:
    "Download your QR code in multiple formats",
  auth__signup_welcome__secondary__feature3: "Create unlimited QR codes",
  auth__signup_welcome__secondary__feature4:
    "Manage all your QR code in one place",
  auth__signup_welcome__secondary__feature5: "Edit your QR code content",
  auth__signup_welcome__secondary__feature6:
    "Track your QR codes with powerful analytics",
  auth__signup_welcome__secondary__title: "Your QR code is ready!",
  auth__signup_welcome__title:
    "Create a FREE account to download, edit and manage your QR codes",
  auth__signup_welcome__title_v0: "Download your QR code",
  public__dashboard__account__2fa__activate_button: "Activate 2FA",
  public__dashboard__account__2fa__confirmation_dialog__button: "Got it!",
  public__dashboard__account__2fa__confirmation_dialog__description: "Success!",
  public__dashboard__account__2fa__confirmation_dialog__title:
    "Two-factor authentication disabled",
  public__dashboard__account__2fa__description:
    "Enhance account security: add an extra layer of protection.",
  public__dashboard__account__2fa__disable_button: "Disable 2FA",
  public__dashboard__account__2fa__disable_dialog__cancel_button: "Cancel",
  public__dashboard__account__2fa__disable_dialog__description:
    "Enter the two-factor authentication code from the App",
  public__dashboard__account__2fa__disable_dialog__disable_button:
    "Disable 2FA",
  public__dashboard__account__2fa__disable_dialog__title:
    "Disable two-factor authentication",
  public__dashboard__account__2fa__enable_dialog__activate_button: "Activate",
  public__dashboard__account__2fa__enable_dialog__step_1__description:
    "Download and install <authAppLink>Google Authenticator</authAppLink> on your mobile device.",
  public__dashboard__account__2fa__enable_dialog__step_1__title:
    "Step 1: <strong>Install the App</strong>",
  public__dashboard__account__2fa__enable_dialog__step_2__secret:
    "If your app doesn’t recognize the QR code, enter the following key manually: <secret></secret>",
  public__dashboard__account__2fa__enable_dialog__step_2__title:
    "Step 2: <strong>Scan the QR Code</strong>",
  public__dashboard__account__2fa__enable_dialog__step_3__description:
    "Enter the 6-digital code generated in Google Authenticator",
  public__dashboard__account__2fa__enable_dialog__step_3__title:
    "Step 3: <strong>Enter the code</strong>",
  public__dashboard__account__2fa__enable_dialog__title:
    "Enable two-factor autentication",
  public__dashboard__account__2fa__status: "2FA Status: <value>Enabled</value>",
  public__dashboard__account__2fa__status_enabled: "Enabled",
  public__dashboard__account__billing_info__city: "City",
  public__dashboard__account__billing_info__city_placeholder: "e.g. Hightstown",
  public__dashboard__account__billing_info__company_email_address_placeholder:
    "e.g. mycompany@gmail.com",
  public__dashboard__account__billing_info__company_name: "Company name",
  public__dashboard__account__billing_info__company_name_placeholder:
    "e.g. MyCompany",
  public__dashboard__account__billing_info__country: "Country",
  public__dashboard__account__billing_info__country_placeholder:
    "e.g. United States",
  public__dashboard__account__billing_info__email_address: "Email address",
  public__dashboard__account__billing_info__form_success_submit:
    "Your information has been saved",
  public__dashboard__account__billing_info__last_name: "Last name",
  public__dashboard__account__billing_info__last_name_placeholder: "e.g. Smith",
  public__dashboard__account__billing_info__name: "Name",
  public__dashboard__account__billing_info__name_placeholder: "e.g. John",
  public__dashboard__account__billing_info__phone_number: "Phone number",
  public__dashboard__account__billing_info__phone_number_placeholder:
    "e.g. 111-444-1234",
  public__dashboard__account__billing_info__section_company: "Company",
  public__dashboard__account__billing_info__section_personal: "Personal",
  public__dashboard__account__billing_info__section_title:
    "Please choose how your account will be used.",
  public__dashboard__account__billing_info__state: "State",
  public__dashboard__account__billing_info__state_placeholder: "e.g. NJ",
  public__dashboard__account__billing_info__street_address: "Street address",
  public__dashboard__account__billing_info__street_address_placeholder:
    "e.g. 201 S Main St",
  public__dashboard__account__billing_info__tax_id: "Tax ID",
  public__dashboard__account__billing_info__tax_id_placeholder:
    "e.g. 12-3456789",
  public__dashboard__account__billing_info__zip_code: "Zip/Postal code",
  public__dashboard__account__billing_info__zip_code_placeholder: "e.g. 08520",
  public__dashboard__account__password__input_confirm_password_label:
    "Confirm password",
  public__dashboard__account__password__input_password_label: "Password",
  public__dashboard__account__password__success_description:
    "Your password has been successfully changed.",
  public__dashboard__account__password__title:
    "Enter a new password into both fields below.",
  public__dashboard__account__settings__delete_account__button: "Delete",
  public__dashboard__account__settings__delete_account__confirmation_caption:
    "If you are 100% sure, please type {keyword} below to confirm.",
  public__dashboard__account__settings__delete_account__confirmation_description:
    "If you delete your account your subscription will be immediately cancelled. It will not be possible to restore the deleted QR codes.",
  public__dashboard__account__settings__delete_account__confirmation_title:
    "Deleting is permanent",
  public__dashboard__account__settings__delete_account__danger_zone:
    "Danger zone",
  public__dashboard__account__settings__delete_account__description:
    "If you proceed, all your created QR codes will become inactive and will be deleted! Anyone who scans them will not see the content. Your subscription will be immediately cancelled. It will not be possible to restore the deleted QR codes.",
  public__dashboard__account__settings__delete_account__label:
    "Reason for account deletion",
  public__dashboard__account__settings__delete_account__placeholder:
    "Please select your reason",
  public__dashboard__account__settings__delete_account__reason_1:
    "My QR code campaign is over",
  public__dashboard__account__settings__delete_account__reason_2:
    "I found another QR code platform",
  public__dashboard__account__settings__delete_account__reason_3:
    "QR codes are too expensive for me",
  public__dashboard__account__settings__delete_account__reason_4:
    "Other reason",
  public__dashboard__account__settings__delete_account__success_description:
    "Your account has been successfully deleted.",
  public__dashboard__account__settings__delete_account__success_title:
    "Account Deleted",
  public__dashboard__account__settings__delete_account__title: "Delete account",
  public__dashboard__account__settings__email__description:
    "To change your email, enter your new address below.",
  public__dashboard__account__settings__email__label: "Email",
  public__dashboard__account__settings__email__placeholder: "Enter your email",
  public__dashboard__account__settings__email__success:
    "Your email have been successfully changed",
  public__dashboard__account__settings__email__title: "Email address",
  public__dashboard__account__settings__language__and_timezone__description:
    "Please choose your preferred language and time zone from the lists below.",
  public__dashboard__account__settings__language__and_timezone__title:
    "Change language and time zone",
  public__dashboard__account__settings__language__description:
    "Please choose your preferred language from the list below.",
  public__dashboard__account__settings__language__label: "Language",
  public__dashboard__account__settings__language__title: "Language",
  public__dashboard__account__settings__language_placeholder:
    "Please select language",
  public__dashboard__account__settings__language_placeholder_copy:
    "Please select language",
  public__dashboard__account__settings__success_title: "Congratulations!",
  public__dashboard__account__settings__timezone__label: "Time Zone",
  public__dashboard__account__settings__timezone_placeholder: "Time Zone",
  public__dashboard__account__tabs__api_keys: "API keys",
  public__dashboard__account__tabs__billing_info: "Billing Information",
  public__dashboard__account__tabs__password: "Password",
  public__dashboard__account__tabs__security: "Security",
  public__dashboard__account__tabs__settings: "Settings",
  public__dashboard__account__tabs__two_factor_auth:
    "Two-Factor Authentication (2FA)",
  public__dashboard__account_title: "Account",
  public__dashboard__activate__qr_code__modal_description:
    "If you confirm, anyone who scans the QR code will see the content you defined.",
  public__dashboard__activate__qr_code__modal_subtitle:
    "Are you sure you want to activate this QR code?",
  public__dashboard__activate__qr_code__modal_title: "Activate QR Code",
  public__dashboard__analytics__activity_card__day: "Day",
  public__dashboard__analytics__activity_card__group_by__days: "Days",
  public__dashboard__analytics__activity_card__group_by__hours: "Hours",
  public__dashboard__analytics__activity_card__group_by__minutes: "Minutes",
  public__dashboard__analytics__activity_card__group_by__months: "Months",
  public__dashboard__analytics__activity_card__group_by__weeks: "Weeks",
  public__dashboard__analytics__activity_card__group_by__years: "Years",
  public__dashboard__analytics__activity_card__month: "Month",
  public__dashboard__analytics__activity_card__title: "Scan activity",
  public__dashboard__analytics__activity_card__total_scans:
    "{count, plural, one {{count} total scan} other {{count} total scans}}",
  public__dashboard__analytics__activity_card__year: "Year",
  public__dashboard__analytics__city_card__more_popover_title: "All cities",
  public__dashboard__analytics__city_card__title: "Scans by city",
  public__dashboard__analytics__controls__close_filters: "Close filters",
  public__dashboard__analytics__country_card__more_popover_title:
    "All countries",
  public__dashboard__analytics__country_card__title: "Scans by country",
  public__dashboard__analytics__date_range__all_time: "All time",
  public__dashboard__analytics__date_range__last_days:
    "{count, plural, one {Last {days} day} other {Last {days} days}}",
  public__dashboard__analytics__date_range__last_months:
    "{count, plural, one {Last {months} month} other {Last {months} months}}",
  public__dashboard__analytics__date_range__today: "Today",
  public__dashboard__analytics__date_range__yesterday: "Yesterday",
  public__dashboard__analytics__filter__os_title: "Operating systems",
  public__dashboard__analytics__filter__qr_cities_title: "Cities",
  public__dashboard__analytics__filter__qr_countries_title: "Countries",
  public__dashboard__analytics__filter__qr_placeholder:
    "Type the name to search",
  public__dashboard__analytics__filter__qr_title: "QR code name",
  public__dashboard__analytics__heatmap_card__am: "am",
  public__dashboard__analytics__heatmap_card__friday: "Friday",
  public__dashboard__analytics__heatmap_card__monday: "Monday",
  public__dashboard__analytics__heatmap_card__pm: "pm",
  public__dashboard__analytics__heatmap_card__saturday: "Saturday",
  public__dashboard__analytics__heatmap_card__scans:
    "{count, plural, one {<value>{count}</value> scan} other {<value>{count}</value> scans}}",
  public__dashboard__analytics__heatmap_card__sunday: "Sunday",
  public__dashboard__analytics__heatmap_card__thursday: "Thursday",
  public__dashboard__analytics__heatmap_card__title: "Scans by time of the day",
  public__dashboard__analytics__heatmap_card__tuesday: "Tuesday",
  public__dashboard__analytics__heatmap_card__wednesday: "Wednesday",
  public__dashboard__analytics__os_card__more_popover_title:
    "All operating systems",
  public__dashboard__analytics__os_card__title: "Scans by operating system",
  public__dashboard__analytics__qr_codes_total_label:
    "Total number of QR codes",
  public__dashboard__analytics__qr_name_card__more_popover_title:
    "All QR codes",
  public__dashboard__analytics__qr_name_card__title: "Scans by QR code name",
  public__dashboard__analytics__scans_by_field_card__chart__tooltip_value:
    "{count, plural, one {{count} scan ({percentage}%)} other {{count} scans ({percentage}%)}}",
  public__dashboard__analytics__scans_by_field_card__count_button: "xx",
  public__dashboard__analytics__scans_by_field_card__empty_description:
    "Not enough data to show statistics",
  public__dashboard__analytics__scans_by_field_card__empty_title:
    "No data to display",
  public__dashboard__analytics__scans_by_field_card__hashtag_button: "#",
  public__dashboard__analytics__scans_by_field_card__more_button: "Show more",
  public__dashboard__analytics__scans_by_field_card__percentage_button: "%",
  public__dashboard__analytics__scans_total_label: "Total scans",
  public__dashboard__analytics__scans_total_tooltip: "Total number of scans",
  public__dashboard__analytics__scans_unique_label: "Unique scans",
  public__dashboard__analytics__scans_unique_tooltip:
    "Total number of devices scans",
  public__dashboard__analytics_title: "Analytics",
  public__dashboard__billing__active_period__with__difference:
    "{count, plural, one {Valid until {date} <highlight>({difference} day left)</highlight>} other {Valid until {date} <highlight>({difference} days left)</highlight>}}",
  public__dashboard__billing__active_period__with_no_difference:
    "Valid until {date}",
  public__dashboard__billing__cancel_subscription__button:
    "Cancel subscription",
  public__dashboard__billing__cancel_subscription_description:
    "If you choose to cancel your subscription, all of your QR codes will be deactivated once your current subscription period expires.",
  public__dashboard__billing__cancel_subscription_title:
    "Do you really want to cancel your subscription?",
  public__dashboard__billing__premium_cancelling__banner_description:
    "You canceled your subscription. Please subscribe to one of our plans to re-activate your QR codes and gain unlimited scans.",
  public__dashboard__billing__premium_in_debt__banner_description:
    "We were unable to process your payment. All your QR codes have been paused. Please resubscribe to our standard plan to reactivate your QR codes and gain access to unlimited scans.",
  public__dashboard__billing__premium_unpaid__banner_description:
    "{count, plural, one {We were unable to process your payment. All your QR codes will be paused in {count} day. Please make sure you have sufficient funds and update your payment details.} other {We were unable to process your payment. All your QR codes will be paused in {count} days. Please make sure you have sufficient funds and update your payment details.}}",
  public__dashboard__billing__resubscribe__button: "Resubscribe",
  public__dashboard__billing__subscribe__button: "Subscribe",
  public__dashboard__billing__subscription__card__expiry: "Expiry",
  public__dashboard__billing__subscription__payment_method: "Payment method",
  public__dashboard__billing__subscription__plan__and__payment_method:
    "Subscription and payment method",
  public__dashboard__billing__subscription_fix__button: "Fix payment info",
  public__dashboard__billing__subscription_status_active: "Active",
  public__dashboard__billing__subscription_status_cancelled: "Cancelled",
  public__dashboard__billing__subscription_status_expired: "Expired",
  public__dashboard__billing__table__amount: "Amount",
  public__dashboard__billing__table__download_invoice: "Download invoice",
  public__dashboard__billing__table__invoice_number: "Invoice #",
  public__dashboard__billing__table__payment_method: "Payment method",
  public__dashboard__billing__table__plan: "Plan",
  public__dashboard__billing__table__status: "Status",
  public__dashboard__billing__table__status_failed: "Failed",
  public__dashboard__billing__table__status_paid: "Paid",
  public__dashboard__billing__table__transaction_date: "Transaction date",
  public__dashboard__billing__transaction_history__payment_method__apple_pay:
    "Apple Pay",
  public__dashboard__billing__transaction_history__payment_method__credit_card:
    "Credit or debit card",
  public__dashboard__billing__transaction_history__payment_method__google_pay:
    "Google Pay",
  public__dashboard__billing__transaction_history__payment_method__paypal:
    "PayPal",
  public__dashboard__billing__transaction_history__title: "Transaction History",
  public__dashboard__billing_title: "Billing",
  public__dashboard__bulk__delete__qr_code__modal_description:
    "If you confirm, the selected QR code(s) will be irreversibly deleted, and no one scanning them will be able to access their content. If you plan to use these QR code(s) in the future, consider pausing them instead.",
  public__dashboard__bulk__delete__qr_code__modal_subtitle:
    "Are you sure you want to delete the selected QR code(s)?",
  public__dashboard__bulk__delete__qr_code__modal_success:
    "QR code(s) deleted successfully.",
  public__dashboard__bulk_download__cancelled: "Download cancelled",
  public__dashboard__bulk_download__creating_zip: "Creating ZIP file...",
  public__dashboard__bulk_download__failed:
    "Download failed. Please try again.",
  public__dashboard__bulk_download__no_codes_processed:
    "No QR codes could be processed.",
  public__dashboard__bulk_download__preparing: "Preparing download...",
  public__dashboard__bulk_download__processing: "Processing...",
  public__dashboard__bulk_download__processing_batch:
    "Processing QR codes {start}-{end} of {total}",
  public__dashboard__bulk_download__success:
    "All QR codes have been downloaded successfully!",
  public__dashboard__bulk_download__success_count:
    "Successfully downloaded {count} QR codes!",
  public__dashboard__bulk_download__title_complete: "Download Complete",
  public__dashboard__bulk_download__title_downloading: "Downloading QR Codes",
  public__dashboard__bulk_reset_scans__qr_code__modal_description:
    "This action will reset the scan counter to 0 for all selected QR codes.",
  public__dashboard__bulk_reset_scans__qr_code__modal_subtitle:
    "Are you sure you want to reset the scan count for the selected QR code(s)?",
  public__dashboard__bulk_reset_scans__qr_code__modal_title: "Reset scans",
  public__dashboard__change_qr_type__modal__description:
    "If you confirm:\n<li>You will lose the current content for this QR code.</li>\n<li>You will need to create new content for the new QR code type.</li>\n<li>Anyone who scans this QR code will see the new content (not the old one).</li>\n<li>The QR code design will remain the same, so there’s no need to print or download it again.</li>",
  public__dashboard__change_qr_type__modal__subtitle:
    "Are you sure you want to change the selected QR code type? (e.g. Change a website URL QR code to a simple text or video QR code)",
  public__dashboard__change_qr_type__modal__title: "Change QR code type",
  public__dashboard__common_day: "day",
  public__dashboard__common_days: "days",
  public__dashboard__deactivated__banner_button: "Subscribe",
  public__dashboard__deactivated__banner_description:
    "Your freemium account has been inactive for at least 2 months. All your QR codes have been paused and will soon be removed. Please subscribe to one of our plans to reactivate your QR codes.",
  public__dashboard__deactivated__banner_title: "Account suspended",
  public__dashboard__delete__qr_code__modal_cancel: "Go back",
  public__dashboard__delete__qr_code__modal_confirm: "Confirm",
  public__dashboard__delete__qr_code__modal_description:
    "If you confirm, the QR code will be irreversibly deleted, and no one scanning it will be able to access its content. If you plan to use this QR code in the future, consider pausing it instead.",
  public__dashboard__delete__qr_code__modal_subtitle:
    "Are you sure you want to delete this QR code?",
  public__dashboard__delete__qr_code__modal_success:
    "QR code deleted successfully.",
  public__dashboard__delete__qr_code__modal_title: "Delete QR code",
  public__dashboard__edit__qr_name__dialog__qr_name__field_label:
    "QR code name",
  public__dashboard__edit__qr_name__dialog_title: "Edit QR code name",
  public__dashboard__edit__qr_url__dialog__field_label: "Complete URL",
  public__dashboard__edit__qr_url__dialog_title: "Edit destination URL",
  public__dashboard__leave_review__accept: "Yes",
  public__dashboard__leave_review__deny: "No",
  public__dashboard__leave_review__title: "Do you like using My QR Code?",
  public__dashboard__pause__qr_code__modal_description:
    "If you confirm, anyone scanning the QR code will not see the related content.",
  public__dashboard__pause__qr_code__modal_subtitle:
    "Are you sure you want to pause the selected QR code?",
  public__dashboard__pause__qr_code__modal_title: "Pause QR code",
  public__dashboard__premium_cancelled__banner_button: "Resubscribe",
  public__dashboard__premium_cancelled__banner_description:
    "You canceled your subscription and the subscription period has now expired. All your QR codes have been paused. Please resubscribe to one of our plans to reactivate your QR codes and gain access to unlimited scans.",
  public__dashboard__premium_cancelled__banner_title: "Subscription expired",
  public__dashboard__premium_cancelling__banner_button: "Resubscribe",
  public__dashboard__premium_cancelling__banner_description:
    "You’ve canceled your subscription. Please subscribe again to reactivate your QR codes and gain access to unlimited scans.",
  public__dashboard__premium_cancelling__banner_title: "Subscription canceled",
  public__dashboard__premium_in_debt__banner_button: "Resubscribe",
  public__dashboard__premium_in_debt__banner_description:
    "We were unable to process your subscription payment. All your QR codes have been paused. Please resubscribe to our standard plan to reactivate your QR codes and gain access to unlimited scans.",
  public__dashboard__premium_in_debt__banner_title:
    "Subscription payment failed",
  public__dashboard__premium_unpaid__banner_button: "Fix payment info",
  public__dashboard__premium_unpaid__banner_description:
    "We were unable to process your payment. All your QR codes will be paused in {days} {period}. Please make sure you have sufficient funds and update your payment details.",
  public__dashboard__premium_unpaid__banner_title:
    "Subscription payment failed",
  public__dashboard__qr_codes__free_trial: "Free Trial",
  public__dashboard__qr_codes__remaining__days:
    "<remaining_days></remaining_days> days remaining",
  public__dashboard__qr_codes_title: "QR codes",
  public__dashboard__qr_download__qr_card__download: "Download QR Code",
  public__dashboard__qr_download__qr_card__manage: "Manage my QR Codes",
  public__dashboard__qr_name__untitled: "Untitled",
  public__dashboard__qr_table____qr_card__preview_tooltip: "Click to scan",
  public__dashboard__qr_table__controls__clear_all: "Clear all",
  public__dashboard__qr_table__controls__clear_filters: "Clear filters",
  public__dashboard__qr_table__controls__filters: "Filters",
  public__dashboard__qr_table__controls__search_placeholder:
    "Search by name or URL",
  public__dashboard__qr_table__controls__see_results: "See results",
  public__dashboard__qr_table__controls__sort_asc_created: "Newest first",
  public__dashboard__qr_table__controls__sort_asc_edited: "Recently modified",
  public__dashboard__qr_table__controls__sort_asc_name: "Name (A-Z)",
  public__dashboard__qr_table__controls__sort_asc_scans: "Most scanned",
  public__dashboard__qr_table__controls__sort_asc_status: "Status (A-Z)",
  public__dashboard__qr_table__controls__sort_asc_type: "Type (A-Z)",
  public__dashboard__qr_table__controls__sort_creation_date: "Creation date",
  public__dashboard__qr_table__controls__sort_date: "Date",
  public__dashboard__qr_table__controls__sort_desc_created: "Oldest first",
  public__dashboard__qr_table__controls__sort_desc_edited:
    "Least recently modified",
  public__dashboard__qr_table__controls__sort_desc_name: "Name (Z-A)",
  public__dashboard__qr_table__controls__sort_desc_scans: "Least scanned",
  public__dashboard__qr_table__controls__sort_desc_status: "Status (Z-A)",
  public__dashboard__qr_table__controls__sort_desc_type: "Type (Z-A)",
  public__dashboard__qr_table__controls__sort_name: "Name",
  public__dashboard__qr_table__controls__sort_placeholder: "Sort by",
  public__dashboard__qr_table__controls__sort_scans: "Scans",
  public__dashboard__qr_table__controls__sort_size: "Size",
  public__dashboard__qr_table__controls__sort_status: "Status",
  public__dashboard__qr_table__controls__sort_type: "Type",
  public__dashboard__qr_table__controls__sort_updated_date:
    "Last modified date",
  public__dashboard__qr_table__controls__status_active: "Active",
  public__dashboard__qr_table__controls__status_disabled: "Disabled",
  public__dashboard__qr_table__controls__status_paused: "Paused",
  public__dashboard__qr_table__controls__status_placeholder: "QR Code status",
  public__dashboard__qr_table__controls__type_placeholder: "QR Code type",
  public__dashboard__qr_table__empty_search__description: "Try another search",
  public__dashboard__qr_table__empty_search__title: "No matches found",
  public__dashboard__qr_table__items_selected:
    "{count, plural, one {{size} item selected} other {{size} items selected}}",
  public__dashboard__qr_table__no_codes__title: "Create your first QR code",
  public__dashboard__qr_table__pagination__all: "All",
  public__dashboard__qr_table__pagination__entries:
    "<show>Showing</show> <start></start> to <end></end> of <total></total> entries",
  public__dashboard__qr_table__pagination__per_page:
    "<show>Show</show> <count></count> <text>per page</text>",
  public__dashboard__qr_table__qr__card__scan: "Scan",
  public__dashboard__qr_table__qr__card__scans: "Scans",
  public__dashboard__qr_table__qr_card__actions: "Actions",
  public__dashboard__qr_table__qr_card__active: "Active",
  public__dashboard__qr_table__qr_card__click_to_view_analytics:
    "Click to see related analytics",
  public__dashboard__qr_table__qr_card__creation_date: "Created: {date}",
  public__dashboard__qr_table__qr_card__download: "Download",
  public__dashboard__qr_table__qr_card__download_copy: "Download",
  public__dashboard__qr_table__qr_card__download_option__activate: "Activate",
  public__dashboard__qr_table__qr_card__download_option__analytics: "Analytics",
  public__dashboard__qr_table__qr_card__download_option__change_qr_type:
    "Change QR type",
  public__dashboard__qr_table__qr_card__download_option__custom:
    "Custom download",
  public__dashboard__qr_table__qr_card__download_option__delete: "Delete",
  public__dashboard__qr_table__qr_card__download_option__download: "Download",
  public__dashboard__qr_table__qr_card__download_option__duplicate: "Duplicate",
  public__dashboard__qr_table__qr_card__download_option__edit: "Edit",
  public__dashboard__qr_table__qr_card__download_option__eps: "EPS",
  public__dashboard__qr_table__qr_card__download_option__jpg: "JPG",
  public__dashboard__qr_table__qr_card__download_option__pause: "Pause",
  public__dashboard__qr_table__qr_card__download_option__pdf: "PDF",
  public__dashboard__qr_table__qr_card__download_option__png: "PNG",
  public__dashboard__qr_table__qr_card__download_option__reset_scans:
    "Reset scans",
  public__dashboard__qr_table__qr_card__download_option__share: "Share",
  public__dashboard__qr_table__qr_card__download_option__svg: "SVG",
  public__dashboard__qr_table__qr_card__download_option__svg__tiny_illustrator:
    "SVG Tiny (Illustrator)",
  public__dashboard__qr_table__qr_card__download_qr_code_description:
    "Select the type of file to download",
  public__dashboard__qr_table__qr_card__download_qr_code_title:
    "Download your QR Code",
  public__dashboard__qr_table__qr_card__download_qr_code_type: "Type of file",
  public__dashboard__qr_table__qr_card__edit_date: "Last modified: {date}",
  public__dashboard__qr_table__qr_card__paused: "Paused",
  public__dashboard__qr_table__qr_card__recently_modified: "RECENTLY MODIFIED",
  public__dashboard__qr_table__qr_card__scans:
    "{count, plural, one {<count></count> Scan} other {<count></count> Scans}}",
  public__dashboard__qr_table__qr_card__share: "Share",
  public__dashboard__qr_table__qr_card__type: "Type <name></name>",
  public__dashboard__qr_table__select_all_items:
    "{size, plural, one {Select {size} item} other {Select all {size} items}}",
  public__dashboard__reactivate__button: "Reactivate",
  public__dashboard__reset_scans__qr_code__modal_description:
    "If you confirm, the scans counter for this QR code will return to 0.",
  public__dashboard__reset_scans__qr_code__modal_subtitle:
    "Are you sure you want to reset the number of scans for the selected QR code?",
  public__dashboard__reset_scans__qr_code__modal_title: "Reset scans",
  public__dashboard__resubscribe__popup_button: "OK",
  public__dashboard__resubscribe_success__popup_description:
    "You have successfully resubscribed.",
  public__dashboard__resubscribe_success__popup_title: "Success",
  public__dashboard__scan__qr_code__modal_description:
    "Scan this QR code in order to preview your content. You can also use the link below.",
  public__dashboard__scan__qr_code__modal_title: "Scan the QR code",
  public__dashboard__share__qr_code__modal__paused_qr_warning:
    "This QR code is paused",
  public__dashboard__share__qr_code__modal_copy_button: "Copy",
  public__dashboard__share__qr_code__modal_description:
    "Share the link below with others (e.g. a printing agency) to download and print the QR code",
  public__dashboard__share__qr_code__modal_title: "Share QR code",
  public__dashboard__shared__cta_button: "Create QR code",
  public__dashboard__shared__upgrade_cta_button: "Upgrade now",
  public__dashboard__sidebar__link_groups__account: "Account",
  public__dashboard__sidebar__link_groups__analytics: "Analytics",
  public__dashboard__sidebar__link_groups__billing: "Billing",
  public__dashboard__sidebar__link_groups__help: "Help",
  public__dashboard__sidebar__link_groups__logout: "Log out",
  public__dashboard__sidebar__link_groups__qr_codes: "QR Codes",
  public__dashboard__statistics__download_button: "Export data",
  public__dashboard__statistics__download_csv__button: "Download CSV",
  public__dashboard__statistics__download_xlsx__button: "Download XLSX",
  public__dashboard__subscription_failed__popup_title: "Failed",
  public__dashboard__trial_expired__alert_message:
    "Your <trial_days></trial_days>-Day Free Trial expired. Upgrade your account to reactivate your QR code.",
  public__dashboard__trial_expired__cta_activate: "Activate account",
  public__dashboard__trial_expired__modal__analytics_feature_restricted:
    "Access to all tracking metrics will be restricted.",
  public__dashboard__trial_expired__modal__analytics_feature_restricted__active:
    "Access to all tracking metrics has been restricted.",
  public__dashboard__trial_expired__modal__create_qr_code_feature_restricted:
    "You will be unable to create new QR codes or edit current ones.",
  public__dashboard__trial_expired__modal__create_qr_code_feature_restricted__active:
    "You cannot create new QR codes or edit current ones.",
  public__dashboard__trial_expired__modal__download_feature_restricted:
    "You will no longer be able to download your QR codes.",
  public__dashboard__trial_expired__modal__download_feature_restricted__active:
    "You are no longer able to download your QR codes.",
  public__dashboard__trial_expired__modal__expire_date:
    "After <expires_at></expires_at>, your account will be downgraded and the following features will be restricted:",
  public__dashboard__trial_expired__modal__expired_date:
    "Your account expired on <expires_at></expires_at>, your account will be downgraded and the following features will be restricted:",
  public__dashboard__trial_expired__modal__expired_date__premium_canceled:
    "Your account expired on <expires_at></expires_at> and was not upgraded. The following features have been restricted:",
  public__dashboard__trial_expired__modal__scan_feature_restricted:
    "Your dynamic QR codes will no longer be scannable.",
  public__dashboard__trial_expired__modal__scan_feature_restricted__active:
    "Your dynamic QR codes are no longer scannable.",
  public__dashboard__trial_expired__modal__trial_countdown_days: "days",
  public__dashboard__trial_expired__modal__trial_countdown_hours: "hours",
  public__dashboard__trial_expired__modal__trial_countdown_minutes: "mins",
  public__dashboard__trial_expired__modal_title: "Your free trial expires in",
  public__dashboard__trial_expired__modal_upgrade_title:
    "To continue using My QR Code without interruptions, upgrade your account.",
  public__dashboard__trial_expired__modal_upgrade_title__premium_canceled:
    "To continue using My QR Code without interruptions and reactivate your QR codes, upgrade your account.",
  public__dashboard__user_status__is_deactivated__modal_title:
    "Account suspended",
  public__dashboard__user_status__is_premium_cancelled__modal_title:
    "Subscription canceled",
  public__dashboard__user_status__is_premium_cancelling__modal_title:
    "Subscription canceled",
  public__dashboard__user_status__is_premium_unpaid__modal_title:
    "Subscription payment failed",
  generator__address_change_prompt_dialog__description:
    "Are you sure you want to continue?",
  generator__address_change_prompt_dialog__no: "No",
  generator__address_change_prompt_dialog__title:
    "Switching will reset your input.",
  generator__address_change_prompt_dialog__yes: "Yes",
  generator__app_screen__description_fallback:
    "Track your workouts, monitor your progress, and stay motivated with personalized plans.",
  generator__app_screen__developer_fallback: "VitalTech Solutions",
  generator__app_screen__name_fallback: "FitPulse",
  generator__content_form__title: "Add content to the {type} QR code",
  generator__content_form__title__edit_mode:
    "Edit content of the {type} QR code",
  generator__content_form_section__about__address_section__city: "City",
  generator__content_form_section__about__address_section__city__placeholder:
    "e.g. New York City",
  generator__content_form_section__about__address_section__country: "Country",
  generator__content_form_section__about__address_section__country__placeholder:
    "e.g. United States",
  generator__content_form_section__about__address_section__manual_button:
    "Manual",
  generator__content_form_section__about__address_section__postal_code:
    "Postal code",
  generator__content_form_section__about__address_section__postal_code__placeholder:
    "e.g. 10005",
  generator__content_form_section__about__address_section__state: "State",
  generator__content_form_section__about__address_section__state__placeholder:
    "e.g. New York",
  generator__content_form_section__about__address_section__street: "Street",
  generator__content_form_section__about__address_section__street__placeholder:
    "e.g. Spring Avenue, 9/18",
  generator__content_form_section__about__address_section__title: "Address",
  generator__content_form_section__about__address_section__url: "URL",
  generator__content_form_section__about__address_section__url__placeholder:
    "e.g. www.google.com/maps/search",
  generator__content_form_section__about__address_section__url_button: "URL",
  generator__content_form_section__about__company_section__name: "Company name",
  generator__content_form_section__about__company_section__name__placeholder:
    "e.g. My company",
  generator__content_form_section__about__company_section__profession: "Title",
  generator__content_form_section__about__company_section__profession__placeholder:
    "e.g. Film editor",
  generator__content_form_section__about__company_section__title:
    "Company details",
  generator__content_form_section__about__contact_section__alt_phone:
    "Alternative phone number",
  generator__content_form_section__about__contact_section__email: "Email",
  generator__content_form_section__about__contact_section__email__placeholder:
    "e.g. name@email.com",
  generator__content_form_section__about__contact_section__phone:
    "Phone number",
  generator__content_form_section__about__contact_section__phone_placeholder:
    "e.g. +1809999999",
  generator__content_form_section__about__contact_section__title:
    "Contact details",
  generator__content_form_section__about__contact_section__website: "Website",
  generator__content_form_section__about__description:
    "Fill in the information you would like to showcase in your vCard",
  generator__content_form_section__about__personal_section__full_name:
    "Full name",
  generator__content_form_section__about__personal_section__full_name__placeholder:
    "e.g. Jane Cooper",
  generator__content_form_section__about__personal_section__image: "Image",
  generator__content_form_section__about__personal_section__max_image_size:
    "Maximum size: {size}MB",
  generator__content_form_section__about__personal_section__title:
    "Personal information",
  generator__content_form_section__about__personal_section__upload_image:
    "Upload image (jpg, png, svg)",
  generator__content_form_section__about__summary_section__text: "Text",
  generator__content_form_section__about__summary_section__text__placeholder:
    "e.g. About my company",
  generator__content_form_section__about__summary_section__title: "Summary",
  generator__content_form_section__about__title: "About you",
  generator__content_form_section__about_company__description:
    "Provide a summary about your company",
  generator__content_form_section__about_company__title: "About the company",
  generator__content_form_section__app__description:
    "Provide details about your app",
  generator__content_form_section__app__description__placeholder:
    "e.g. Financial app",
  generator__content_form_section__app__developer__placeholder:
    "e.g. Jones & John",
  generator__content_form_section__app__name__label: "App name",
  generator__content_form_section__app__name__placeholder: "e.g. My App",
  generator__content_form_section__app__platforms__amazon: "Amazon",
  generator__content_form_section__app__platforms__amazon__label:
    "e.g. https://amazon.com/my-app",
  generator__content_form_section__app__platforms__app_store: "App Store",
  generator__content_form_section__app__platforms__app_store__label:
    "e.g. https://apps.apple.com/my-app",
  generator__content_form_section__app__platforms__play_store: "Google Play",
  generator__content_form_section__app__platforms__play_store__label:
    "e.g. https://play.google.com/my-app",
  generator__content_form_section__app__platforms__xiaomi: "Xiaomi",
  generator__content_form_section__app__platforms__xiaomi__label:
    "e.g. https://mi.com/my-app",
  generator__content_form_section__app__title: "App information",
  generator__content_form_section__business_info__add_button: "Add Button",
  generator__content_form_section__business_info__description:
    "Provide details about your business",
  generator__content_form_section__business_info__input__company_name_description:
    "e.g. My Company",
  generator__content_form_section__business_info__input__company_name_label:
    "Company name*",
  generator__content_form_section__business_info__input__subtitle_label:
    "Subtitle",
  generator__content_form_section__business_info__input__subtitle_placeholder:
    "e.g. Creating animated videos since 1994",
  generator__content_form_section__business_info__input__subtitle_placeholder_mobile:
    "e.g. Creating animated videos since...",
  generator__content_form_section__business_info__input__title_label: "Title",
  generator__content_form_section__business_info__input__title_placeholder:
    "e.g. Animation Studio",
  generator__content_form_section__business_info__title: "Business information",
  generator__content_form_section__business_page__summary_section__text__placeholder:
    "e.g. Our company provides a wide variety of services",
  generator__content_form_section__business_page_screen__add_image: "Add Image",
  generator__content_form_section__contact_info__description:
    "Provide contact details",
  generator__content_form_section__contact_info__title: "Contact information",
  generator__content_form_section__contact_info_section__full_name__placeholder:
    "e.g. Mike Smith",
  generator__content_form_section__design__description:
    "Choose your color scheme",
  generator__content_form_section__design__primary_color: "Primary color",
  generator__content_form_section__design__secondary_color: "Secondary color",
  generator__content_form_section__design__swap_button: "Swap the colours",
  generator__content_form_section__design__title: "Design and customize",
  generator__content_form_section__facebook__description:
    "Provide information about yourself and your Facebook page",
  generator__content_form_section__facebook__name__label: "Name",
  generator__content_form_section__facebook__name__placeholder:
    "e.g. John Smith",
  generator__content_form_section__facebook__title: "Page information",
  generator__content_form_section__facebook__title__placeholder:
    "e.g. Photojournalist",
  generator__content_form_section__facebook__url__label: "Facebook URL",
  generator__content_form_section__facebook__url__placeholder:
    "e.g. https://facebook.com",
  generator__content_form_section__facebook__website__placeholder:
    "e.g. https://johnsmith.com",
  generator__content_form_section__facilities__accessible: "Accessible",
  generator__content_form_section__facilities__accomodation: "Accommodation",
  generator__content_form_section__facilities__bar: "Bar",
  generator__content_form_section__facilities__child_friendly: "Child-friendly",
  generator__content_form_section__facilities__coffee: "Cafe",
  generator__content_form_section__facilities__description:
    "Select relevant icons below to showcase business facilities",
  generator__content_form_section__facilities__parking: "Parking",
  generator__content_form_section__facilities__pet_friendly: "Pet-friendly",
  generator__content_form_section__facilities__restaurant: "Restaurant",
  generator__content_form_section__facilities__seating: "Seating",
  generator__content_form_section__facilities__taxi: "Taxi",
  generator__content_form_section__facilities__title: "Facilities",
  generator__content_form_section__facilities__toilet: "Toilet",
  generator__content_form_section__facilities__train: "Train",
  "generator__content_form_section__facilities__wi-fi": "Wi-Fi",
  generator__content_form_section__images_information__add_button: "Add Button",
  generator__content_form_section__images_information__button_text__label:
    "Button text*",
  generator__content_form_section__images_information__button_text__placeholder:
    "e.g. Click here",
  generator__content_form_section__images_information__button_url__label:
    "URL*",
  generator__content_form_section__images_information__description:
    "Provide a headline, URL and short description for your image gallery",
  generator__content_form_section__images_information__description__label:
    "Description",
  generator__content_form_section__images_information__description__placeholder:
    "e.g. Beautiful shots of cityscape sunsets",
  generator__content_form_section__images_information__headline__label:
    "Headline",
  generator__content_form_section__images_information__headline__placeholder:
    "e.g. Sunset photos",
  generator__content_form_section__images_information__share_button_tooltip:
    '"Share" function will be available after clicking the "Next" button.',
  generator__content_form_section__images_information__title:
    "Image gallery information",
  generator__content_form_section__images_information__website__label:
    "Website",
  generator__content_form_section__location__description:
    "Provide your business address if you have one",
  generator__content_form_section__location__title: "Location",
  generator__content_form_section__menu__add_new_section: "Add new section",
  generator__content_form_section__menu__add_section: "Add section",
  generator__content_form_section__menu__description: "Input your menu",
  generator__content_form_section__menu__hidden_label: "Hidden section",
  generator__content_form_section__menu__products__allergens_label:
    "Allergens present",
  generator__content_form_section__menu__products__default_name: "Product",
  generator__content_form_section__menu__products__description_label:
    "Description",
  generator__content_form_section__menu__products__description_placeholder:
    "e.g. Served with sourdough toast",
  generator__content_form_section__menu__products__hidden_label:
    "Hidden product",
  generator__content_form_section__menu__products__hide_tooltip:
    "You can hide the products in the section and reactivate it whenever you want.",
  generator__content_form_section__menu__products__name_label: "Product name",
  generator__content_form_section__menu__products__name_placeholder:
    "e.g. Eggs Benedict",
  generator__content_form_section__menu__products__price_label: "Price",
  generator__content_form_section__menu__products__price_placeholder:
    "e.g. 10 €",
  generator__content_form_section__menu__products__translation_description_label:
    "Description translation",
  generator__content_form_section__menu__products__translation_description_placeholder:
    "e.g. Translation if needed",
  generator__content_form_section__menu__products__translation_label:
    "Name translation",
  generator__content_form_section__menu__products__translation_placeholder:
    "e.g. Enter item name translation",
  generator__content_form_section__menu__restaurant_info__description:
    "Description",
  generator__content_form_section__menu__restaurant_info__description__placeholder:
    "e.g. Italian",
  generator__content_form_section__menu__restaurant_info__name:
    "Restaurant name",
  generator__content_form_section__menu__restaurant_info__name__placeholder:
    "e.g. My restaurant",
  generator__content_form_section__menu__sections__add_new_product:
    "Add new product",
  generator__content_form_section__menu__sections__add_product: "Add Product",
  generator__content_form_section__menu__sections__default_name: "Section",
  generator__content_form_section__menu__sections__delete_modal_description:
    "The entire section and all the products will be deleted.",
  generator__content_form_section__menu__sections__delete_modal_title:
    "Are you sure?",
  generator__content_form_section__menu__sections__description_label:
    "Description of section",
  generator__content_form_section__menu__sections__description_placeholder:
    "e.g. Fresh breakfasts available until midday",
  generator__content_form_section__menu__sections__hide_tooltip:
    "You can hide the sections and reactivate them whenever you want.",
  generator__content_form_section__menu__sections__modal__cancel_button:
    "Cancel",
  generator__content_form_section__menu__sections__modal__delete_button:
    "Delete",
  generator__content_form_section__menu__sections__name_label:
    "Name of section",
  generator__content_form_section__menu__sections__name_placeholder:
    "e.g. Breakfast",
  generator__content_form_section__menu__sections__products_sort_dialog_title:
    "Reorder products",
  generator__content_form_section__menu__sections__translation_description_label:
    "Description translation",
  generator__content_form_section__menu__sections__translation_description_placeholder:
    "e.g. Enter description translation",
  generator__content_form_section__menu__sections__translation_label:
    "Name translation",
  generator__content_form_section__menu__sections__translation_placeholder:
    "Enter name translation",
  generator__content_form_section__menu__title: "Menu",
  generator__content_form_section__menu_screen__image: "Add image",
  generator__content_form_section__opening__hours_section__daynames__friday:
    "Friday",
  generator__content_form_section__opening__hours_section__daynames__monday:
    "Monday",
  generator__content_form_section__opening__hours_section__daynames__monday_friday:
    "Monday - Friday",
  generator__content_form_section__opening__hours_section__daynames__saturday:
    "Saturday",
  generator__content_form_section__opening__hours_section__daynames__sunday:
    "Sunday",
  generator__content_form_section__opening__hours_section__daynames__thursday:
    "Thursday",
  generator__content_form_section__opening__hours_section__daynames__tuesday:
    "Tuesday",
  generator__content_form_section__opening__hours_section__daynames__wednesday:
    "Wednesday",
  generator__content_form_section__opening_hours__description:
    "If applicable, provide your business hours",
  generator__content_form_section__opening_hours__or_separator: "OR",
  generator__content_form_section__opening_hours__tabs__24h_format: "24 hrs",
  generator__content_form_section__opening_hours__tabs__am: "AM",
  generator__content_form_section__opening_hours__tabs__am_pm: "AM/PM",
  generator__content_form_section__opening_hours__tabs__open_24h: "Open 24/7",
  generator__content_form_section__opening_hours__tabs__open_24h_mobile: "24/7",
  generator__content_form_section__opening_hours__tabs__pm: "PM",
  generator__content_form_section__opening_hours__title: "Opening hours",
  generator__content_form_section__pdf__company_name_label: "Company name",
  generator__content_form_section__pdf__company_name_placeholder:
    "e.g. My Company",
  generator__content_form_section__pdf__document_description:
    "Provide information about your PDF file",
  generator__content_form_section__pdf__document_title: "Document information",
  generator__content_form_section__pdf__file_description:
    "Upload your PDF file",
  generator__content_form_section__pdf__file_description_label:
    "File description",
  generator__content_form_section__pdf__file_description_placeholder:
    "e.g. Annual Plan 2024",
  generator__content_form_section__pdf__file_title: "PDF file*",
  generator__content_form_section__pdf__full_screen:
    "Show PDF file only (full screen)",
  generator__content_form_section__pdf__max_file_size:
    "Maximum size: {size} MB",
  generator__content_form_section__pdf__title_label: "Title",
  generator__content_form_section__pdf__title_placeholder:
    "e.g. Animation Studio",
  generator__content_form_section__pdf__website_label: "Website",
  generator__content_form_section__pdf__website_placeholder:
    "e.g. https://pauljones.com",
  generator__content_form_section__pdf_screen__title: "Upload your file",
  generator__content_form_section__platform__description:
    "Choose at least one store below and add a link to your app",
  generator__content_form_section__platform__title: "App store platform links*",
  generator__content_form_section__qr_name__description:
    "Give a name to your QR code",
  generator__content_form_section__qr_name__description__changed:
    "Set a name for your QR code",
  generator__content_form_section__qr_name__field_label: "Name",
  generator__content_form_section__qr_name__field_label_copy: "QR code name",
  generator__content_form_section__qr_name__field_placeholder:
    "e.g. My first QR code",
  generator__content_form_section__qr_name__title: "Name of the QR code",
  generator__content_form_section__qr_name__title__changed: "QR code name",
  generator__content_form_section__restaurant_info__description:
    "Provide details about your restaurant",
  generator__content_form_section__restaurant_info__title:
    "Restaurant information",
  generator__content_form_section__sections__sort_dialog_title:
    "Reorder sections",
  generator__content_form_section__share_images__checkbox_label:
    "Add “Share” button to landing page",
  generator__content_form_section__share_images__description:
    "Add the ability to share your image gallery",
  generator__content_form_section__share_images__title: "Share",
  generator__content_form_section__share_video__checkbox_label:
    "Add “Share” button to landing page",
  generator__content_form_section__share_video__description:
    "Add the ability to share your video",
  generator__content_form_section__social__add__button: "Add",
  generator__content_form_section__social__add_button: "Add more",
  generator__content_form_section__social__add_social__image: "Add social logo",
  generator__content_form_section__social__description:
    "Click on the icons below to add social media channels you'd like to display",
  generator__content_form_section__social__fallback_description:
    "Social Account",
  generator__content_form_section__social__input__description_label:
    "Description",
  generator__content_form_section__social__input__description_placeholder:
    "e.g. My profile",
  generator__content_form_section__social__input__name_label: "Name*",
  generator__content_form_section__social__input__name_placeholder:
    "e.g. My social media",
  generator__content_form_section__social__input__url_label: "URL*",
  generator__content_form_section__social__input__url_placeholder:
    "e.g. https://pauljones.com",
  generator__content_form_section__social__input_placeholder:
    "e.g. social-media.com",
  generator__content_form_section__social__label: "Add social channels",
  generator__content_form_section__social__max_image_size: "Maximum size: 5MB",
  generator__content_form_section__social__title: "Social networks",
  generator__content_form_section__social__title_required: "Social networks*",
  generator__content_form_section__social__upload_image:
    "Upload your logo (jpg, png, svg)",
  generator__content_form_section__social_information__description:
    "Add a headline and short description to introduce your social channels",
  generator__content_form_section__social_information__description__label:
    "Description",
  generator__content_form_section__social_information__description__placeholder:
    "e.g. Find me on Facebook and Instagram",
  generator__content_form_section__social_information__headline__label:
    "Headline",
  generator__content_form_section__social_information__headline__placeholder:
    "e.g. My social media channels",
  generator__content_form_section__social_information__title: "Information",
  generator__content_form_section__social_media__social__description:
    "Click on the relevant icons below and provide links to at least one of your social media pages",
  generator__content_form_section__summary__title: "Summary",
  generator__content_form_section__videos__button: "Add",
  generator__content_form_section__videos__description_text__placeholder:
    "e.g. A look at my 21st birthday video",
  generator__content_form_section__videos__headline__caption:
    "Maximum size: {size} MB",
  generator__content_form_section__videos__headline__delete_button: "Delete",
  generator__content_form_section__videos__headline__label:
    "Upload videos from your device",
  generator__content_form_section__videos__input__error__link:
    "You have entered an invalid link. We support YouTube and Vimeo video links. Please try again.",
  generator__content_form_section__videos__input__label: "Video URL",
  generator__content_form_section__videos__input__placeholder:
    "e.g. https://youtube.com",
  generator__content_form_section__videos__maxfiles:
    "There is a {count} video limit.",
  generator__content_form_section__videos__name_text__label: "Title*",
  generator__content_form_section__videos__no_video_error:
    "At least one video is required.",
  generator__content_form_section__videos__sort_dialog_title: "Reorder videos",
  generator__content_form_section__videos__title: "Add videos*",
  generator__content_form_section__videos__wrong__format:
    "Your video is either broken or has an incorrect format. You can upload videos as '.mp4', '.mov', '.ogg' or '.webm' files only.",
  generator__content_form_section__videos_information__add_button: "Add Button",
  generator__content_form_section__videos_information__button_text__label:
    "Button text*",
  generator__content_form_section__videos_information__button_text__placeholder:
    "e.g. Click here",
  generator__content_form_section__videos_information__button_url__label:
    "URL*",
  generator__content_form_section__videos_information__button_url__placeholder:
    "e.g. https://pauljohnes.com",
  generator__content_form_section__videos_information__description:
    "Provide details about your video(s)",
  generator__content_form_section__videos_information__description__label:
    "Description",
  generator__content_form_section__videos_information__description__label_copy:
    "Description",
  generator__content_form_section__videos_information__description__placeholder:
    "e.g. A look at my 21st birthday celebration",
  generator__content_form_section__videos_information__developer__label:
    "Developer",
  generator__content_form_section__videos_information__headline__label: "Title",
  generator__content_form_section__videos_information__headline__placeholder:
    "e.g. Birthday video",
  generator__content_form_section__videos_information__title:
    "Video information",
  generator__content_form_section__website__url_caption:
    "Enter the URL to which the QR code will link",
  generator__content_form_section__website__url_label: "Website URL",
  generator__content_form_section__website__url_placeholder:
    "e.g. www.mywebsite.com",
  generator__content_form_section__website__url_title: "Website address",
  generator__content_form_section__welcome_screen__description:
    "Display a custom logo while your page is loading",
  generator__content_form_section__welcome_screen__image: "Image",
  generator__content_form_section__welcome_screen__title: "Welcome screen",
  generator__content_form_section__welcome_screen__upload_caption:
    "Maximum size: {size} MB",
  generator__content_form_section__welcome_screen__upload_title:
    "Upload your welcome screen (jpg, png, svg)",
  generator__create_wifi__nopass: "NONE",
  generator__design_form__classy_pattern_tooltip: "Classy",
  generator__design_form__classy_rounded_pattern_tooltip: "Classy rounded",
  generator__design_form__corner_dot_tooltip: "Round dot",
  generator__design_form__corner_section__description:
    "Select your QR code corner style",
  generator__design_form__corner_section__description__changed:
    "Choose your QR code corner style",
  generator__design_form__corner_section__dot_color: "Corner dots color",
  generator__design_form__corner_section__dot_label: "Corner dots type",
  generator__design_form__corner_section__frame_color: "Corner frames color",
  generator__design_form__corner_section__frame_label: "Corner frames style",
  generator__design_form__corner_section__heading: "Corners style",
  generator__design_form__corner_section__title: "QR code corners",
  generator__design_form__corner_square_tooltip: "Square dot",
  generator__design_form__dot_frame_tooltip: "Rounded",
  generator__design_form__dot_pattern_tooltip: "Rounded",
  generator__design_form__dots_pattern_tooltip: "Dots",
  generator__design_form__extra_rounded_frame_tooltip: "Round-edge square",
  generator__design_form__extra_rounded_pattern_tooltip: "Extra rounded",
  generator__design_form__frame_section__background_color_label:
    "Background color",
  generator__design_form__frame_section__description:
    "Frames make your QR code stand out from the crowd, inspiring more scans",
  generator__design_form__frame_section__description__changed:
    "Frames improve your QR code visibility, leading to more scans",
  generator__design_form__frame_section__frame_color_label: "Frame color",
  generator__design_form__frame_section__frame_text_label: "Frame text",
  generator__design_form__frame_section__frame_text_placeholder: "Scan me!",
  generator__design_form__frame_section__text_color_label: "Text color",
  generator__design_form__frame_section__title: "QR code frame",
  generator__design_form__frame_section__transparent_background:
    "Transparent background",
  generator__design_form__logo_section__description:
    "You can add a logo from our suggestions or upload your own logo.",
  generator__design_form__logo_section__description__changed:
    "Personalize your QR code by adding a logo or image",
  generator__design_form__logo_section__invalid_image_message:
    "Logo image is invalid. Please upload a new one.",
  generator__design_form__logo_section__select_logo: "Select logo",
  generator__design_form__logo_section__title: "Add logo",
  generator__design_form__logo_section__upload_label: "Upload your own logo",
  generator__design_form__no_style_tooltip: "No style",
  generator__design_form__pattern_section__background_label: "Background color",
  generator__design_form__pattern_section__description:
    "Choose a pattern for your QR code and select colors",
  generator__design_form__pattern_section__description__changed:
    "Select a pattern for your QR code and choose colors",
  generator__design_form__pattern_section__dot_label: "Dot color",
  generator__design_form__pattern_section__heading: "Pattern style",
  generator__design_form__pattern_section__title: "QR code pattern",
  generator__design_form__pattern_section__transparent_background:
    "Transparent background",
  generator__design_form__square_frame_tooltip: "Square",
  generator__design_form__square_pattern_tooltip: "Square",
  generator__design_form__title: "Customize design for the {type} QR code",
  generator__design_form__title__edit_mode: "Edit design of the {type} QR code",
  generator__facebook_screen__demo_mode_button_placeholder: "Learn more",
  generator__facebook_screen__name_fallback: "Lucas Anderson",
  generator__facebook_screen__title_fallback: "Developer",
  generator__facebook_screen__website_fallback: "www.lucasanderson-dev.com",
  generator__footer__back_button: "Back",
  generator__footer__create_button: "Create",
  generator__footer__edit_mode__complete_button: "Complete",
  generator__footer__edit_mode__exit_button: "Exit",
  generator__footer__edit_mode__save_button_tooltip: "Save changes",
  generator__footer__edit_mode__save_toast_message: "Your changes were saved",
  generator__footer__finish_button: "Finish",
  generator__footer__next_button: "Next",
  generator__header__help_button: "Help",
  generator__help_popup__back_button: "Back",
  generator__help_popup__close_button: "Close",
  generator__help_popup__finish_button: "Finish",
  generator__help_popup__next_button: "Next",
  generator__help_popup__progress: "Step {step} / {steps}",
  generator__help_popup__step_1__description:
    "Select the type of QR code you want to create.",
  generator__help_popup__step_1__title: "Choose your QR code type",
  generator__help_popup__step_2__description:
    "This is what people will see when they scan your QR code. Make sure that all required fields are filled in correctly.",
  generator__help_popup__step_2__title: "Add information to your QR code",
  generator__help_popup__step_3__description:
    "Choose the style and color of your QR code. You can also add your company logo.",
  generator__help_popup__step_3__title: "Customize your QR code",
  generator__help_popup__step_4__description:
    "Use 'Preview' to see how your information will appear. Scan the QR code to make sure it works correctly.",
  generator__help_popup__step_4__title: "Preview your QR code",
  generator__help_popup__step_5__description:
    "To print your QR code, generate a shareable link or download a PNG, JPG or SVG file.",
  generator__help_popup__step_5__title: "Print your QR code",
  generator__images_content_form__images__description:
    "Upload up to {count} images",
  generator__images_content_form__images__file_limit_exceeded:
    "You cannot upload more than {maxFiles} images. Please try again.",
  generator__images_content_form__images__label: "Image carousel",
  generator__images_content_form__images__label_required: "Image carousel*",
  generator__images_content_form__images__max_size:
    "Maximum size per image: {size} MB",
  generator__images_content_form__images__upload__max_files_error:
    "You cannot upload more than {count} images. Please try again.",
  generator__images_content_form__images__upload__max_size_error:
    "The maximum image size allowed is {size} MB.",
  generator__images_content_form__images__upload_error:
    "The maximum image size allowed is {maxSize} MB. You cannot upload more than {count} images. Please try again.",
  generator__images_content_form__images__upload_images:
    "Upload images (jpg, png, svg)",
  generator__images_screen__demo_mode_button_placeholder: "View more",
  generator__images_screen__description_fallback:
    "Discover stunning visuals. A picture speaks louder than words.",
  generator__images_screen__headline_fallback: "Image Lounge",
  generator__images_screen__website_fallback: "www.imagelounge.com",
  generator__phone_preview__placeholder_description:
    "Select a type of QR Code from the left column",
  generator__plain_text__preview__default_placeholder:
    "Space exploration involves the technologies and operations that ensure spacecraft navigate safely, and that scientific instruments collect accurate data from celestial bodies. Thus, in precise language, the terms space travel and astronautics are related but not synonymous; nevertheless, this distinction is often ignored, even by experts, because the term mission success is widely used in aerospace, even though it would ideally be replaced with mission accomplishment if strict terminology were applied.",
  generator__preview_switch__preview: "Preview",
  generator__preview_switch__qr: "QR code",
  generator__qr_content_screen__business_info_type__sections__contact__full_name:
    "Name:",
  generator__qr_content_screen__business_page_type__sections__company_name:
    "BookNest",
  generator__qr_content_screen__business_page_type__sections__company_subtitle:
    "Find your next favorite read on the leading marketplace for books.",
  generator__qr_content_screen__business_page_type__sections__company_title:
    "Cdf Limited",
  generator__qr_content_screen__business_page_type__sections__contact__mobile_phone:
    "Mobile Phone:",
  generator__qr_content_screen__business_page_type__sections__contact__title:
    "Contacts",
  generator__qr_content_screen__business_page_type__sections__facilities__title:
    "Facilities",
  generator__qr_content_screen__business_page_type__sections__learn_more__button:
    "Learn more",
  generator__qr_content_screen__business_page_type__sections__location__title:
    "Location",
  generator__qr_content_screen__business_page_type__sections__open_hours__title:
    "Open hours",
  generator__qr_content_screen__business_page_type__sections__show_on_map__link:
    "Show on map",
  generator__qr_content_screen__business_page_type__sections__social__title:
    "Social media",
  generator__qr_content_screen__business_page_type__sections__summary__title:
    "Summary",
  generator__qr_content_screen__social_media_type__sections__description:
    "Hello, I’m Lina, a fitness coach. Check out my workouts and healthy lifestyle guides.",
  generator__qr_content_screen__social_media_type__sections__headline:
    "Train with Lina",
  generator__qr_content_screen__vcard_type__add_contact_button: "Add contact",
  generator__qr_content_screen__vcard_type__sections__company__name: "Company:",
  generator__qr_content_screen__vcard_type__sections__company__profession:
    "Title:",
  generator__qr_content_screen__vcard_type__sections__company__title: "Company",
  generator__qr_content_screen__vcard_type__sections__contact__email: "Email:",
  generator__qr_content_screen__vcard_type__sections__contact__location:
    "Location:",
  generator__qr_content_screen__vcard_type__sections__contact__mobile_phone:
    "Phone:",
  generator__qr_content_screen__vcard_type__sections__contact__title: "Contact",
  generator__qr_content_screen__vcard_type__sections__contact__website:
    "Website:",
  generator__qr_content_screen__vcard_type__sections__social__title:
    "Social media",
  generator__qr_content_screen__vcard_type__sections__summary__title: "Summary",
  generator__qr_view__menu_default_description:
    "Experience the best dishes of modern European cuisine.",
  generator__qr_view__menu_default_name: "La Fortuna",
  generator__qr_view__menu_default_section_desserts: "Desserts",
  generator__qr_view__menu_default_section_drinks: "Drinks",
  generator__qr_view__menu_default_section_pizza: "Pizza",
  generator__qr_view__menu_default_section_soups_salad: "Soups & Salad",
  generator__qr_view__menu_default_section_starters: "Starters",
  generator__qr_view__pdf__default_description:
    "Discover our exclusive offers and highlights in this PDF.",
  generator__qr_view__pdf__default_name: "BeautyZone",
  generator__qr_view__pdf__default_title: "Promotions",
  generator__qr_view__pdf__default_website: "www.fashionista.com",
  generator__qr_view__pdf__see_pdf: "See PDF",
  generator__qr_view__wifi_close_button: "Close",
  generator__qr_view__wifi_connect_button: "Connect",
  generator__qr_view__wifi_default_name: "PingKing",
  generator__qr_view__wifi_default_name_copy: "Green Peace",
  generator__qr_view__wifi_title: "Connect to a network",
  generator__share_qr_dialog__copy_button: "Copy",
  generator__share_qr_dialog__description: "Share this link via",
  generator__share_qr_dialog__or: "or copy link to clipboard",
  generator__share_qr_dialog__success_copy_button: "The link has been copied!",
  generator__share_qr_dialog__title: "Share",
  generator__step_1__qr_type__plain_text__description:
    "Enter the text that you want displayed when a user scans your QR code",
  generator__step_1__qr_type__plain_text__label: "Text*",
  generator__step_1__qr_type__plain_text__placeholder:
    "e.g. The concert will take place at 9pm on October 12.",
  generator__step_1__qr_type__plain_text__title: "Simple text",
  generator__step_1__qr_type__wifi_encryption__label: "Encryption type",
  generator__step_1__qr_type__wifi_hidden__label: "Hidden network",
  generator__step_1__qr_type__wifi_password__label: "Password",
  generator__step_1__qr_type__wifi_password__placeholder: "e.g. 12345678",
  generator__step_1__qr_type__wifi_ssid__label: "Network name",
  generator__step_1__qr_type__wifi_ssid__placeholder: "e.g. My Wi-Fi",
  generator__step_1__qr_type_cards__app__description:
    "Link to the iOS App Store/Google Play",
  generator__step_1__qr_type_cards__app__title: "App",
  generator__step_1__qr_type_cards__business_page__description:
    "Profile your business information",
  generator__step_1__qr_type_cards__business_page__description__changed:
    "Share your business information",
  generator__step_1__qr_type_cards__business_page__title: "Business Page",
  generator__step_1__qr_type_cards__facebook__description:
    "Direct users to your Facebook page",
  generator__step_1__qr_type_cards__facebook__description__changed:
    "Share your Facebook page",
  generator__step_1__qr_type_cards__facebook__title: "Facebook",
  generator__step_1__qr_type_cards__images__description:
    "Display an image gallery",
  generator__step_1__qr_type_cards__images__title: "Images",
  generator__step_1__qr_type_cards__menu__description:
    "Create a digital restaurant menu",
  generator__step_1__qr_type_cards__menu__title: "Menu",
  generator__step_1__qr_type_cards__pdf__description: "Showcase info in a PDF",
  generator__step_1__qr_type_cards__pdf__description__changed: "Show a PDF",
  generator__step_1__qr_type_cards__pdf__title: "PDF",
  generator__step_1__qr_type_cards__plain_text__description:
    "Display a body of text",
  generator__step_1__qr_type_cards__plain_text__title: "Simple Text",
  generator__step_1__qr_type_cards__social_media__description:
    "Link to all your social media channels",
  generator__step_1__qr_type_cards__social_media__description__changed:
    "Share your social media channels",
  generator__step_1__qr_type_cards__social_media__title: "Social Media",
  generator__step_1__qr_type_cards__url__description:
    "Link to a website of your choice",
  generator__step_1__qr_type_cards__url__title: "Website URL",
  generator__step_1__qr_type_cards__vcard__description:
    "Share your electronic business card",
  generator__step_1__qr_type_cards__vcard__title: "vCard",
  generator__step_1__qr_type_cards__video__description:
    "Share one or multiple videos",
  generator__step_1__qr_type_cards__video__title: "Video",
  generator__step_1__qr_type_cards__wifi__description:
    "Connect to a wireless network",
  generator__step_1__qr_type_cards__wifi__subtitle:
    "Provide your Wi-Fi name, the type of encryption and your password",
  generator__step_1__qr_type_cards__wifi__title: "Wi-Fi",
  generator__step_1__title: "Choose QR code type",
  generator__step_1__title__change: "Change QR code type",
  generator__stepper__change_type_mode__step3: "Edit design",
  generator__stepper__edit_mode__step2: "Edit content",
  generator__stepper__edit_mode__step3: "Edit QR design",
  generator__stepper__step1_desktop: "Choose Type",
  generator__stepper__step1_desktop__change: "Change type",
  generator__stepper__step1_mobile: "Type",
  generator__stepper__step1_mobile__initial: "Choose QR code type",
  generator__stepper__step2_desktop: "Add content",
  generator__stepper__step2_mobile: "Content",
  generator__stepper__step3_desktop: "Customize QR design",
  generator__stepper__step3_mobile: "Design",
  generator__videos_screen__demo_firstvideo_description: "We said “I do”!",
  generator__videos_screen__demo_firstvideo_name: "Best day ever!",
  generator__videos_screen__demo_secondvideo_description:
    "Dancing with my friends!",
  generator__videos_screen__demo_secondvideo_name: "Dance! Dance! Dance!",
  generator__videos_screen__description_fallback:
    "A day full of love, laughter, and unforgettable memories!",
  generator__videos_screen__headline_fallback: "Our Wedding Day",
  generator__website_screen__placeholder: "www.qrcreate.com",
  public__global_price_format_copy: "{amount}",
  public__product__quarterly_2__priceTitle:
    "{titlePrice}/mo\nInvoiced every quarter",
  public__about_us__description: "See what others are saying about My QR Code",
  public__about_us__hero_button: "Learn more",
  public__about_us__hero_description:
    "Welcome to QRcreate, your go-to QR code generator for your business and personal needs.",
  public__about_us__hero_title: "Get to know us",
  public__about_us__mission_description:
    "Our mission is to seamlessly connect the physical and digital realms through the power of QR codes. With our user-friendly platform, you can enhance customer experiences, optimize operations, and track the effectiveness of your marketing efforts.",
  public__about_us__mission_description_2:
    "Join the ever-growing community of millions of happy users who rely on QRcreate to unlock the potential of QR codes. Jump on board and let us show all the cool things QR tech can do!",
  public__about_us__mission_title: "Our mission",
  public__about_us__review__description__1:
    "My QR Code definitely met my expectations. Ran into a few bumps customizing my code, but a quick call and they steered me right. Appreciated their prompt assistance!",
  public__about_us__review__description__2:
    "Using My QR Code has been a smooth experience. The whole process of converting and personalizing QR codes was quick and easy. I used them to get feedback at my event. It worked perfectly for what I wanted!",
  public__about_us__review__description__3:
    "I owe a thanks to the My QR Code support team. Had a slight hiccup when trying to process a payment, but they were quick to grasp my issue and straighten things out.",
  public__about_us__review__description__4:
    "Great experience! I really appreciate the design flexibility, especially when it comes to color and format. I can create unlimited QR codes!",
  public__about_us__review__description__5:
    "After a long search for the perfect QR code converter, I landed on My QR Code. This platform totally met my expectations. Big shoutout to the team for their work!",
  public__about_us__review__name__1: "John",
  public__about_us__review__name__2: "Craig",
  public__about_us__review__name__3: "Amanda",
  public__about_us__review__name__4: "Celia",
  public__about_us__review__name__5: "Jennifer",
  public__about_us__review__title__1: "Works as expected!",
  public__about_us__review__title__2: "Perfect solution to get feedback",
  public__about_us__review__title__3: "Quick support!",
  public__about_us__review__title__4:
    "Great experience, and unlimited QR codes",
  public__about_us__review__title__5: "Perfect QR code converter",
  public__about_us__stat_countries_label: "Countries",
  public__about_us__stat_countries_number: "56",
  public__about_us__stat_qr_codes_label: "QR codes generated",
  public__about_us__stat_qr_codes_number: "4M +",
  public__about_us__stat_qr_types_label: "QR Code types",
  public__about_us__stat_qr_types_number: "12",
  public__about_us__stat_users_label: "Active users",
  public__about_us__stat_users_number: "1M+",
  public__about_us__title: "Customer reviews",
  "public__all-in-one_section__cta_button": "Create QR code",
  "public__all-in-one_section__description":
    "Now you can fully customize your QR codes with your brand colors and company logo. Get performance analytics and edit content whenever you like.",
  "public__all-in-one_section__title":
    "Your all-in-one QR code marketing platform",
  public__allergens__icons__celery: "Celery",
  public__allergens__icons__cereals: "Grain",
  public__allergens__icons__crustaceans: "Crustaceans",
  public__allergens__icons__eggs: "Eggs",
  public__allergens__icons__fish: "Fish",
  public__allergens__icons__lupin: "Lupin",
  public__allergens__icons__milk: "Milk",
  public__allergens__icons__mustard: "Mustard",
  public__allergens__icons__nuts: "Nuts",
  public__allergens__icons__peanuts: "Peanuts",
  public__allergens__icons__sesame: "Sesame",
  public__allergens__icons__shellfish: "Shellfish",
  public__allergens__icons__soy: "Soy",
  public__allergens__icons__sulfur_sulfites: "Sulfur & sulfites",
  public__alt_landing__hero_section__subtitle: "The Best QR Code Generator",
  "public__api__errors__client__qr-codes__qrCodeLeadsToMalware":
    "This QR code can’t be activated because its URL was flagged as harmful. Update the URL and try again.",
  public__app_screen__description_fallback: "Purchase movie tickets online.",
  public__backend_save_error: "An error occurred while saving",
  public__brands_section__title: "Top brands that use QR codes:",
  public__breadcrumbs__about_us: "About us",
  public__breadcrumbs__cancel_subscription: "Cancel subscription",
  public__breadcrumbs__home: "QRcreate",
  "public__cancel_subscription__ additional_info__account":
    'You can also cancel your subscription by logging into your account, going to the “Billing” tab and clicking "Cancel Subscription".',
  "public__cancel_subscription__ additional_info__email":
    "If you don't remember which email you used to register, check your inbox for our welcome mailer. Otherwise, contact our friendly customer support team <link>here.</link>",
  public__cancel_subscription__confirmation_email__button: "OK",
  public__cancel_subscription__confirmation_email__description:
    "We have sent a confirmation request to your email address if you have an account with us.",
  public__cancel_subscription__confirmation_email__title:
    "Confirmation required",
  public__cancel_subscription__description:
    "Easily cancel your subscription by entering the email used to create your account.",
  public__cancel_subscription__form__email_placeholder__text:
    "Enter your email used for registration",
  public__cancel_subscription__form__email_placeholder__text_mobile:
    "Enter your email",
  public__cancel_subscription__form_button: "Cancel Subscription",
  public__cancel_subscription__form_instructions:
    'You may cancel your subscription at any time. Just provide the email address you used when registering and click on the "Cancel Subscription" button below. It\'s that easy!',
  public__cancel_subscription__link_expired_message:
    "Your cancellation link has expired. Please submit a new cancellation request.",
  public__cancel_subscription__modal_button: "Ok",
  public__cancel_subscription__modal_description:
    "Your subscription has been successfully canceled.",
  public__cancel_subscription__modal_title: "Success",
  public__cancel_subscription__title: "Cancel Your Subscription!",
  public__checkout__product_features:
    "<li>Receive your QR code by email</li>\n<li>Download your QR code in multiple formats</li>\n<li>Create unlimited QR codes</li>\n<li>Manage all your QR code in one place</li>\n<li>Edit your QR code content</li>\n<li>Track your QR codes with powerful analytics</li>",
  public__choose__plan: "Choose plan",
  public__contact_us__confirmation__description:
    "Our support team will respond within a few hours.",
  public__contact_us__confirmation__title: "Thanks for getting in touch!",
  public__contact_us__description:
    "If you have any questions or concerns, please fill out the form below and our team will reach out to you within a few hours.",
  public__contact_us__fields__email__placeholder: "e.g. johndoe@mail.com",
  public__contact_us__fields__message__label: "Message",
  public__contact_us__fields__surname__label: "Surname",
  public__contact_us__fields__surname__placeholder: "e.g. Doe",
  public__contact_us__info__address_label: "Address:",
  public__contact_us__info__locations_label: "Locations:",
  public__contact_us__subject__label: "Subject",
  public__contact_us__subject__options__billing: "Billing question",
  public__contact_us__subject__options__general: "General inquiry",
  public__contact_us__subject__options__other: "Other",
  public__contact_us__subject__options__suggestion: "Suggested improvement",
  public__contact_us__subject__options__technical: "Technical issue",
  public__contact_us__subject__placeholder: "Select a subject...",
  public__contact_us__submit_button: "Send message",
  public__contact_us__title: "Contact Us",
  public__currency_picker_search__placeholder: "Search",
  "public__email api__errors__signup__invalidEmail":
    "You have entered an invalid email address. Please try again.",
  public__faq__page_title: "Frequently asked questions",
  public__faq_cta__description: "Get answers to your questions about QR codes",
  public__faq_cta__title: "Most common questions about our services",
  public__faq_section__still_have_questions__description:
    "Can’t find the answer you’re looking for? Please chat to our friendly team <link>support@qrcreate.com</link>",
  public__faq_section__still_have_questions__title: "Still have questions?",
  public__faq_section__tab_basics: "Basics",
  public__faq_section__tab_basics__fifth_answer:
    "<p>You can get your QR code by following these three simple steps:</p> <ol> <li>Head to the QR Code Generator and select from the options provided. You can generate QR codes for vCards, social media pages, web pages, and more.</li> <li>For PDFs or webpages, you’ll just need to link a URL or upload a PDF file on the next page. For everything else, My QR Code allows you to design the pages a QR code will link to, like business pages for instance. Fill out the fields, tweak the colors to match your brand, and add as much information as you need, and then click ‘Next’.</li> <li>Generate a QR code that matches your brand or design requirements. You’ll be able to design the QR code to your exact specifications, with the ability to change colors, choose between six different QR patterns, corner squares, and even add borders. Once you’re done, click ‘Finish’ and your QR code will be generated.</li> </ol> <p>All you have to do is fill out the fields, choose from our design templates, and before you know it you’ll have a QR code fit for any purpose. My QR Code makes the process a breeze.</p>",
  public__faq_section__tab_basics__fifth_question:
    "How do I get a QR code for my business?",
  public__faq_section__tab_basics__first_answer:
    "<p>A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone.</p>",
  public__faq_section__tab_basics__first_question:
    "What is a QR code generator?",
  public__faq_section__tab_basics__fourth_answer:
    "<p>The QR Code Generator by My QR Code can be used for commercial and marketing purposes. You can link to business, ad, and product pages, and My QR Code offers premium business features like logos, analytics, and link modification. We even include options for those in the restaurant business, allowing you to link to digital restaurant menus through QR codes.</p>",
  public__faq_section__tab_basics__fourth_question:
    "Can I use My QR Code QR code generator for commercial purposes?",
  public__faq_section__tab_basics__second_answer:
    "<p>My QR Code makes it easy to convert any link, vCard, image, Facebook page, image, restaurant menus or video into a QR code. With our platform, you can also track your QR code scans and customize designs without any technical expertise. Considering that the number of QR codes scanned is just under 27 million for the first 3 months of 2024, it’s a trend you can’t afford to skip.</p>",
  public__faq_section__tab_basics__second_question:
    "Can anyone generate a QR code?",
  public__faq_section__tab_basics__third_answer:
    "<p>QR codes can be generated for free on My QR Code. We also offer premium plans which allow users to access features like unlimited generated QR codes and access to additional analytics like the time and location of scans and the scanning device. Be sure to check out our <link>free AI QR code generator</link>, too, which generates stunning <strong>QR code</strong> art for static codes! You can feed the AI Generator prompts up to 1000 characters long, allowing you to creatively generate your QR art.</p>",
  public__faq_section__tab_basics__third_question:
    "Is My QR Code QR code generator free?",
  public__faq_section__tab_generating_and_designing: "Generating & designing",
  public__faq_section__tab_generating_and_designing__fifth_answer:
    "<p>My QR Code QR codes can be generated as a PNG, JPG image, or SVG graphics file formats. The type of QR code file format you use will depend on your tools and what you need the QR code for. SVG is a vector format which is appropriate for printing and web use and which scales perfectly, but not all software supports the SVG format. PNG and JPG images have a wide-range of applications, especially if you are embedding the QR code on a web page. If you are printing your QR codes, the SVG vector format can guarantee a high quality print.</p>",
  public__faq_section__tab_generating_and_designing__fifth_question:
    "What is the best QR code file format?",
  public__faq_section__tab_generating_and_designing__first_answer:
    "<p>The biggest difference is that static QR codes can’t be changed, while dynamic QR codes can. When you use a static code, you must generate a new QR code if you need to change the content or link destination. My QR Code, on the other hand, generates dynamic QR codes. With dynamic QR codes, linked content can be changed at any time, without having to change the QR code you’re using. Dynamic codes are especially useful for businesses, where business pages and content are updated regularly.</p>",
  public__faq_section__tab_generating_and_designing__first_question:
    "What is the difference between static and dynamic QR codes?",
  public__faq_section__tab_generating_and_designing__fourth_answer:
    "<p>My QR Code’s full access plans allow you to generate unlimited QR codes with unlimited scans. However, with the most basic plan, you’ll have 7-day limited access, which allows you to create one QR code only. Our <link>AI QR Code Generator</link> also allows you to generate unlimited static AI art QR codes, completely free of charge.</p>",
  public__faq_section__tab_generating_and_designing__fourth_question:
    "How many QR codes can I generate on My QR Code?",
  public__faq_section__tab_generating_and_designing__second_answer:
    "<p>It’s easy to generate custom QR Codes with My QR Code’s QR Code Generator. Almost every aspect of your QR code can be customized. You can select between six unique QR code patterns, corner squares, and borders. Plus, you can tweak colors to match your brand aesthetics and add your logo for extra personalization.</p>",
  public__faq_section__tab_generating_and_designing__second_question:
    "Can I make custom QR codes?",
  public__faq_section__tab_generating_and_designing__third_answer:
    "<p>My QR Code allows you to edit your QR codes because we use a <i>Dynamic QR code generator.</i> That means that you can change link destinations and update your content whenever you need to, without having to print out another QR code. Dynamic codes are among the most popular QR codes out there, with 6.8 million scans in the first 3 months of 2024 alone, making them indispensable for businesses who want to reach as many people as possible.</p>",
  public__faq_section__tab_generating_and_designing__third_question:
    "Can I edit my QR codes?",
  public__faq_section__tab_generating_and_designing_mobile:
    "Generating & designing",
  public__faq_section__tab_generating_designing: "Generating & Designing",
  public__faq_section__tab_scanning_and_printing: "Scanning & printing",
  public__faq_section__tab_scanning_and_printing__fifth_answer:
    "<p>You can generate a variety of QR codes for websites and social media with My QR Code’s generator, including PDF, link, vCard, Facebook, and <link>many others</link>. Depending on your brand or design requirements, you can carefully craft your QR code design, colors, and logo to match. My QR Code’s dynamic QR Codes also make it possible to edit the code destination, meaning you don’t have to constantly reprint or create new QR codes.</p>",
  public__faq_section__tab_scanning_and_printing__fifth_question:
    "How to get a QR code for a website?",
  public__faq_section__tab_scanning_and_printing__first_answer:
    "<p>All My QR Code QR codes can be scanned by any Android or iOS device that has a QR code reader built into the camera or installed as an application. Tablets and laptops can also scan QR codes with the appropriate software. If your smartphone or computer doesn’t have a QR code reader, you can download an app that will enable your device to read QR codes.</p>",
  public__faq_section__tab_scanning_and_printing__first_question:
    "How do I scan a QR code?",
  public__faq_section__tab_scanning_and_printing__fourth_answer:
    "<p>For QR codes displayed on the web (for example, in an email, on a website or mobile app), the best format is PNG (Portable Network Graphics) or JPG (Joint Photographics Expert Group) format. Both image formats load much quicker than the aforementioned SVG format, which means that your web pages shouldn’t suffer drawbacks to your page load times. Additionally, PNG and JPG images are widely supported amongst many popular CMSs (Content Management Systems), like WordPress, Wix, and Webflow.</p>",
  public__faq_section__tab_scanning_and_printing__fourth_question:
    "What is the best format for web-based QR codes?",
  public__faq_section__tab_scanning_and_printing__second_answer:
    "<p>The smallest QR code for print would be no less than 1 cm x 1 cm, which is equivalent to 10 mm x 10 mm, 0.4 inches x 0.4 inches, and 38 pixels x 38 pixels. Some QR code scanners may not be able to read codes if they don’t meet <link>minimum QR code size</link> requirements. The distance between the code and the scanner also affects acceptable code sizes. It’s always a good idea to test your code by scanning it before you print a large number of copies.</p>",
  public__faq_section__tab_scanning_and_printing__second_question:
    "What is the smallest a QR code can be for printing?",
  public__faq_section__tab_scanning_and_printing__seventh_answer:
    "<p>You can track QR code scans with My QR Code’s analytics dashboard. Additional information is also available, including the time and location of a scan, and even which device completed a scan.</p>",
  public__faq_section__tab_scanning_and_printing__seventh_question:
    "How to track QR code scans?",
  public__faq_section__tab_scanning_and_printing__sixth_answer:
    "<p>Scanning QR codes on websites is simple. All you need to do is point your smartphone camera or code reader application at a QR code, and you’ll be able to scan them. Additionally, QR codes can also be scanned with a laptop or computer, as long as they have a webcam and QR code scanning app installed.</p>",
  public__faq_section__tab_scanning_and_printing__sixth_question:
    "How to scan QR codes on websites?",
  public__faq_section__tab_scanning_and_printing__third_answer:
    "<p>If you’re printing QR codes, you’ll get better results if you export the image in SVG (Scalable Vector Graphics) format. This vector format scales well and you won’t lose image quality when the code is enlarged, which often happens with JPEG (Joint Photographic Experts Group format) and other image formats.</p>",
  public__faq_section__tab_scanning_and_printing__third_question:
    "What is the best format for QR codes?",
  public__faq_section__tab_scanning_and_printing_mobile: "Printing",
  public__faq_section__tab_scanning_printing: "Scanning & Printing",
  public__faq_section__title: "Most common question about our services",
  public__features_section__customization_options__description:
    "No more boring black-and-white QR codes. Add your company logo and attract more scans by tailor-making your QR code with our endless array of easy-to-use customization options.",
  public__features_section__customization_options__title:
    "Infinite customization options",
  public__features_section__description:
    "Packed with powerful features, our easy-to-use QR code tool helps improve the impact of your marketing, enhance customer experience and increase engagement.",
  public__features_section__download_share_edit__description:
    "No matter what medium you print or display our QR codes on, they'll maintain high resolution. Download in JPG, PNG or SVG. And change the content whenever you want.",
  public__features_section__download_share_edit__title: "Download, share, edit",
  public__features_section__no_website_needed__description:
    "Select the material you’d like to share. Link web pages, PDFs, menus, videos, apps and more.",
  public__features_section__no_website_needed__title: "No website needed",
  public__features_section__qr_code_types__description:
    "No matter your QR code need, we've got you covered. Create a QR code for something as simple as an image or as complex as a full restaurant menu.",
  public__features_section__qr_code_types__title: "12+ different QR code types",
  public__features_section__smartest_qr_code__description:
    "We have combined Artificial Intelligence and design to create utterly flawless QR codes. They can easily be read by any device on earth.",
  public__features_section__smartest_qr_code__title:
    "The smartest QR code around",
  public__features_section__title:
    "QRcreate.com™, the most advanced QR code generator",
  public__features_section__track_everything__description:
    "Our state-of-the-art analytics dashboard provides you with actionable insights about everything, including how many times your QR codes were scanned, where and when.",
  public__features_section__track_everything__title: "Keep track of everything",
  public__footer__copyright: "© {year} QRcreate.com™. All rights reserved.",
  public__footer__copyright__changed:
    "© {year} QRcreate.com™. All rights reserved.",
  public__footer__link_groups__company__about: "About us",
  public__footer__link_groups__company__blog: "Blog",
  public__footer__link_groups__company__industries: "Industries",
  public__footer__link_groups__company__prices: "Prices",
  public__footer__link_groups__company__privacy_policy: "Privacy policy",
  public__footer__link_groups__company__terms: "Terms and conditions",
  public__footer__link_groups__company__title: "Company",
  public__footer__link_groups__free_tools__barcode_scanner: "Barcode scanner",
  public__footer__link_groups__free_tools__qr_scanner: "QR Code scanner",
  public__footer__link_groups__free_tools__title: "Free tools",
  public__footer__link_groups__generators__ai: "AI QR code generator",
  public__footer__link_groups__generators__app:
    "QR code generator for mobile app",
  public__footer__link_groups__generators__business_page:
    "Business QR code generator",
  public__footer__link_groups__generators__facebook:
    "Facebook QR code generator",
  public__footer__link_groups__generators__images: "Image QR code generator",
  public__footer__link_groups__generators__menu:
    "QR code generator for restaurants",
  public__footer__link_groups__generators__pdf: "PDF QR code generator",
  public__footer__link_groups__generators__plain_text: "Text QR code generator",
  public__footer__link_groups__generators__social_media:
    "Social media QR code generator",
  public__footer__link_groups__generators__title: "QR code generators",
  public__footer__link_groups__generators__url: "Link QR code generator",
  public__footer__link_groups__generators__vcard: "VCard QR code generator",
  public__footer__link_groups__generators__video: "Video QR code generator",
  public__footer__link_groups__generators__wifi: "Wi-Fi QR code generator",
  public__footer__link_groups__help__cancel_subscription: "Cancel subscription",
  public__footer__link_groups__help__contact: "Contact us",
  public__footer__link_groups__help__faq: "FAQ",
  public__footer__link_groups__help__title: "Help",
  public__footer__trade_mark: "QRcreate.com™",
  public__generic__duration__days:
    "{count, plural, one {day} other {{count} days}}",
  public__generic__duration__months:
    "{count, plural, one {month} other {{count} months}}",
  public__generic__duration__weeks:
    "{count, plural, one {week} other {{count} weeks}}",
  public__generic__duration__years:
    "{count, plural, one {year} other {{count} years}}",
  public__generic__unexpected_error: "Something went wrong. Please try again.",
  public__generic__unexpected_error_subtitle:
    "Please refresh the page or try again later",
  public__generic__unexpected_error_title: "Something went wrong",
  public__get_in_touch__button_title: "Contact us",
  public__get_in_touch__description:
    "If you have any questions or concerns, please contact us and our team will reach out to you within a few hours.",
  public__get_in_touch__title: "Get in touch with us",
  public__global_price_format: "{amount}",
  public__header__create_qr_button: "Create QR code",
  public__header__link_groups__company__terms: "Terms & conditions",
  public__header__login_button: "Log in",
  public__hero_section__cta_button: "Create my QR code",
  public__hero_section__description__mobile:
    "Effortlessly generate and personalize your QR code in just a few clicks.",
  public__hero_section__feature_1: "Easy, seamless QR code creation",
  public__hero_section__feature_2: "Track and analyze user engagement",
  public__hero_section__feature_3: "Customize design, logo, colors & more",
  public__hero_section__title: "Create your QR code in seconds",
  public__homepage__shared__cta_button: "Create QR code",
  public__how_to_section__cta_button: "Create QR code",
  public__how_to_section__step_1_description:
    "Pick the type of QR code you want to generate with QRcreate - link, PDF, menu, video, app, vCard, and more.",
  public__how_to_section__step_1_title: "Choose QR Code Type | QRcreate",
  public__how_to_section__step_2_description:
    "Use qrcreate.com™ to easily add logos, colors, frames, patterns and styles to your QR code.",
  public__how_to_section__step_2_title: "Customize the design",
  public__how_to_section__step_3_description:
    "Get your QR code in PNG, SVG or JPG format. Print it or share it digitally. It's as easy as that!",
  public__how_to_section__step_3_title: "Download your QR code",
  public__how_to_section__title: "How to create your custom QR code?",
  public__no__reults: "No results",
  public__page__forbidden_description:
    "We are sorry, but you do not have access to this page or resource.",
  public__page__forbidden_title: "Forbidden",
  public__page__not_found_button: "Go to Homepage",
  public__page__not_found_description:
    "The page you are looking for might have been removed.",
  public__page__not_found_title: "Page not found",
  public__plans_page__page_title: "Download Your QR Code",
  public__price_item__save: "Save {saved}%",
  public__pricing_page__7_days_option__title: "7-Day Full Access",
  public__pricing_page__monthly_option__title: "7-Day Limited Access",
  public__pricing_page__most_popular_badge: "Most popular",
  public__pricing_page__page_subtitle:
    "Select a plan to access, download & manage your QR codes",
  public__pricing_page__page_title: "Download your QR code",
  public__pricing_page__yearly_option__title: "Yearly plan",
  public__product_unlock_description:
    "<li>Unlimited QR codes</li>\n<li>Unlimited QR code scans</li>\n<li>Unrestricted customization options</li>\n<li>Unlimited access to analytics</li>\n<li>Unlimited downloads</li>\n<li>Full access to all download formats</li>\n<li>Create any type of QR code you need</li>",
  public__qr_preview_page__description:
    "Powered by QRcreate - QR Code Generator",
  public__qr_preview_page__title: "Scan the QR code",
  public__qr_types_section__app: "App",
  public__qr_types_section__app__description:
    "By scanning a single QR code, anyone can install your app instantly from the App Store or Google Play. Full customization lets you match your code’s appearance to your brand so you stand out from the competition.",
  public__qr_types_section__business__description:
    "Showcase your company information with a business page QR code. This simple, streamlined landing page can include your business details, opening hours and any other key info. Add a button to make booking an appointment effortless.",
  public__qr_types_section__business_page: "Business Page",
  public__qr_types_section__description:
    "No matter what type of content you want to share, you'll find a QR code that suits you. Click through the icons below to explore your options and view examples.",
  public__qr_types_section__facebook: "Facebook",
  public__qr_types_section__facebook__description:
    "Want more likes and shares? Boost the impact of your print media by adding a QR code that links to your Facebook page. It’s all about new ways to build your audience.",
  public__qr_types_section__images: "Images",
  public__qr_types_section__images__description:
    "If you’re in an industry that relies heavily on images to promote your brand, why not use a QR code to link to an image gallery in a snap? Showcase real estate, consumer goods, food and furniture with ease.",
  public__qr_types_section__menu: "Menu",
  public__qr_types_section__menu__description:
    "Own a restaurant or bar? Use a QR code to link to a digital menu and make it easy to access your food and drink offering. You can make menu changes at any time, so it’s always up to date.",
  public__qr_types_section__pdf: "PDF",
  public__qr_types_section__pdf__description:
    "Put all the information that matters at your clients' and customers' fingertips. With a customizable QR code, they can access PDF files rich with content. And after a quick download, they can easily share or save.",
  public__qr_types_section__plain_text__description:
    "From product descriptions to serial numbers to information cards, any text can be accessed immediately with a custom QR code. Make your product more engaging and change the content in real time.",
  public__qr_types_section__simple_text: "Simple Text",
  public__qr_types_section__social_media: "Social Media",
  public__qr_types_section__social_media__description:
    "One QR code can open the door to all of your social media channels. Make it simple for users to follow you on Facebook, Instagram, Twitter or wherever they like to hang out online.",
  public__qr_types_section__title: "A QR code for every need",
  public__qr_types_section__vcard: "vCard",
  public__qr_types_section__vcard__description:
    "Enhance the value of your electronic business card by adding a QR code. This gives viewers an easy way to access more information about you or your company. An added bonus: you can edit the QR content whenever you like.",
  public__qr_types_section__video: "Video",
  public__qr_types_section__video__description:
    "Add a QR code to a brochure, poster, mailer or any other platform to unlock instant access to video content. Make your print media more dynamic, capture attention and boost your brand appeal.",
  public__qr_types_section__website_url: "Website URL",
  public__qr_types_section__website_url__description:
    "Your QR code will open any URL, website or webpage you link it to. By simply scanning your unique QR code with a smartphone, users will conveniently open the webpage you chose. Easy, fast, professional!",
  public__qr_types_section__wifi: "Wi-fi",
  public__qr_types_section__wifi__description:
    "Avoid password problems by using a QR code to unlock Wi-Fi access. With a quick scan, customers can easily get on to your network. Fewer interruptions and super-fast connections will keep everyone happy.",
  public__reviews_section__description:
    "See what others are saying about QRcreate",
  public__reviews_section__review__description__1:
    "QRcreate definitely met my expectations. Ran into a few bumps customizing my code, but a quick call and they steered me right. Appreciated their prompt assistance!",
  public__reviews_section__review__description__2:
    "Using QRcreate has been a smooth experience. The whole process of converting and personalizing QR codes was quick and easy. I used them to get feedback at my event. It worked perfectly for what I wanted!",
  public__reviews_section__review__description__3:
    "I owe a thanks to the QRcreate support team. Had a slight hiccup when trying to process a payment, but they were quick to grasp my issue and straighten things out.",
  public__reviews_section__review__description__4:
    "Great experience! I really appreciate the design flexibility, especially when it comes to color and format. I can create unlimited QR codes!",
  public__reviews_section__review__description__5:
    "After a long search for the perfect QR code converter, I landed on QRcreate. This platform totally met my expectations. Big shoutout to the team for their work",
  public__reviews_section__review__name__1: "John",
  public__reviews_section__review__name__2: "Craig",
  public__reviews_section__review__name__3: "Amanda",
  public__reviews_section__review__name__4: "Celia",
  public__reviews_section__review__name__5: "Jennifer",
  public__reviews_section__review__title__1: "Works as expected!",
  public__reviews_section__review__title__2: "Perfect solution to get feedback",
  public__reviews_section__review__title__3: "Quick support!",
  public__reviews_section__review__title__4:
    "Great experience, and unlimited QR codes",
  public__reviews_section__review__title__5: "Perfect QR code converter",
  public__reviews_section__title: "Customer reviews",
  public__select_dropdown__no_options_available: "No options available",
  public__seo__about_us__description:
    "About QRcreate - the team behind a flexible QR code generator for businesses, restaurants, and creators.",
  public__seo__about_us__title: "About us - QR Code Generator | QRcreate",
  public__seo__alt__landing__page__description:
    "QRcreate is a free QR code generator. Turn any link, vCard, or file into a custom QR code with editable links, logos, and colors.",
  public__seo__alt__landing__page__title: "QR Code Generator | QRcreate",
  public__seo__auth__login__description:
    "Log in to QRcreate to manage your QR codes, view scan analytics, and edit dynamic links from your account.",
  public__seo__auth__login__title: "Login | QRcreate",
  public__seo__auth__signup__description:
    "Create a free QRcreate account to download, edit, and manage your QR codes - QR code generator with custom designs and dynamic links.",
  public__seo__auth__signup__title: "QR Code Generator Sign Up | QRcreate",
  public__seo__cancel__page__description:
    "Manage your QRcreate subscription. Cancel any time, or upgrade to unlock the full benefits of dynamic QR codes.",
  public__seo__cancel__page__title: "Manage Your Subscription | QRcreate",
  public__seo__contact__title: "Contact us - QR Code Generator | QRcreate",
  public__seo__contact_description:
    "Get in touch with the QRcreate team. Contact us for support, partnerships, or questions about our QR code generator.",
  public__seo__faq__title: "FAQ - QR Code Generator | QRcreate",
  public__seo__faq_description:
    "Common questions about generating, customizing, and managing QR codes with QRcreate - formats, scanning, dynamic links, and more.",
  public__seo__landing__page__description:
    "QRcreate is a QR code generator for businesses and creators. Customize designs, edit dynamic links, add logos and colors - free to start.",
  public__seo__landing__page__title: "QRcreate - Custom QR Code Generator",
  public__seo__privacy_policy__description:
    "How QRcreate collects, uses, and protects personal data when you use our QR code generator.",
  public__seo__privacy_policy__title: "Privacy Policy | QRcreate",
  public__seo__terms_of_use__description:
    "Terms governing access to and use of the QRcreate QR code generator and related services.",
  public__seo__terms_of_use__title: "Terms and conditions | QRcreate",
  public__seo_section__company_email: "support@qrcreate.com",
  public__seo_section__generating__qr_code:
    "Generating a QR code doesn’t require customization, but it’s a good idea to add some anyway. This helps your\n            code stand out and makes it easier to find the right one if you generate multiple QR codes. These\n            two-dimensional barcodes can be helpful as long as you organize them well.",
  public__seo_section__how_to_generate_qr_code__description:
    "Generating a QR code takes 6 easy steps, thanks to QRcreate. All you need to do is input a valid link that\n            the code will lead to. Note that the free tools will only create a basic static QR code. If you want to\n            design a QR code with special features or a marketing-friendly look, you will need to turn to QRcreate and\n            our special QR code generators.",
  public__seo_section__how_to_generate_qr_code__title:
    "How to Generate a QR Code?",
  public__seo_section__stand_for__description:
    "The QR in ‘QR code’ stands for Quick Response, as the code is meant to grant fast access\n              to information when you scan it with a telephone camera. The process is almost instantaneous, even though\n              the data hidden in the code is encrypted.",
  public__seo_section__stand_for__title: "What does ‘QR’ in QR code stand for?",
  public__seo_section__steps_to_create_link_qr_code__description:
    "To generate a link QR code takes 6 steps:",
  public__seo_section__steps_to_create_link_qr_code__description_common:
    "Most QR codes will lead to a link, although some may guide to file downloads or media. When creating a QR\n                  code, it is best to use an HTTPS link, as browsers will warn users against opening insecure links.",
  public__seo_section__steps_to_create_link_qr_code__step_1:
    "Go to <link>https://qrcreate.com</link>.",
  public__seo_section__steps_to_create_link_qr_code__step_2:
    "Tap on ‘Create my QR code’.",
  public__seo_section__steps_to_create_link_qr_code__step_3:
    "Choose the Website URL option, it’s the link QR code generator.",
  public__seo_section__steps_to_create_link_qr_code__step_4:
    "Name your code and insert the link.",
  public__seo_section__steps_to_create_link_qr_code__step_5:
    "Customize your link to QR code.",
  public__seo_section__steps_to_create_link_qr_code__step_6:
    "Download and share it.",
  public__seo_section__steps_to_create_link_qr_code__title:
    "How to generate a link QR code?",
  public__seo_section__steps_to_create_qr_code__step_1:
    "Visit <link>https://qrcreate.com</link>.",
  public__seo_section__steps_to_create_qr_code__step_2:
    "Tap on ‘Create my QR code’.",
  public__seo_section__steps_to_create_qr_code__step_3:
    "Choose the appropriate QR code generator type - link, business card, or other.",
  public__seo_section__steps_to_create_qr_code__step_5:
    "Customize the design of the code: add a logo, change colors or appearance.",
  public__seo_section__steps_to_create_qr_code__step_6: "Share it!",
  public__seo_section__what_is_qr_code__description:
    "A QR code is a scannable two-dimensional optic image. It was invented back in 1994 by\n              Denso Wave as a two-dimensional barcode to make logistics simpler. However, nowadays, QR codes mostly\n              direct users to URLs. They are commonly utilized in marketing and goods production to guide customers to\n              websites or provide information about different products.",
  public__seo_section__what_is_qr_code__title: "What is a QR Code?",
  public__stripe_error__incomplete_cvc:
    "Your card's security code is incomplete.",
  public__stripe_error__incomplete_expiry:
    "Your card's expiration date is incomplete.",
  public__stripe_error__incomplete_number: "Your card number is incomplete.",
  public__stripe_error__invalid_expiry_month:
    "Your card's expiration month is invalid.",
  public__stripe_error__invalid_expiry_month_past:
    "Your card's expiration date is in the past.",
  public__stripe_error__invalid_expiry_year:
    "Your card's expiration year is invalid.",
  public__stripe_error__invalid_expiry_year_past:
    "Your card's expiration year is in the past.",
  public__stripe_error__invalid_number: "Your card number is invalid.",
  public__subscription__billing_info__no_trial:
    'By proceeding with payment, you agree to be charged {currencySymbol}{totalPrice} now, accept our <terms>Terms and conditions</terms>, and acknowledge that you have read our <privacy>Privacy policy</privacy>. Your payment will appear as "qrcreate.com" on your credit card statement. You will be billed {currencySymbol}{regularPrice} every {duration} until your subscription ends. You can cancel any time. For any enquiries, you can contact us on support@qrcreate.com or by phone on +1 628-244-9863.',
  public__subscription__billing_info__trial:
    'By proceeding with payment, you agree to be charged {currencySymbol}{totalPrice} now, accept our <terms>Terms and conditions</terms>, and acknowledge that you have read our <privacy>Privacy policy</privacy>. Your payment will appear as "QRcreate.com" on your statement. After {trialDuration}, you will be billed {currencySymbol}{regularPrice} every {duration} until you cancel your subscription. You can cancel anytime. For any inquiries, contact us at <email>support@qrcreate.com</email> or call us at +1 628-244-9863.',
  public__subscription__card__billing_plan: "Plan:",
  public__subscription__card__billing_plan_title: "Billing Information:",
  public__subscription__card__current__payment_method:
    "Current payment method:",
  public__subscription__card__select_payment: "Select payment method:",
  public__subscription__card_header_title: "Total due today:",
  public__subscription__card_unavailable_payment_method:
    "You don’t have this payment method configured. Please choose another payment method.",
  public__subscription__change_button: "Change",
  public__subscription__conflict__paypal__payment_card_button: "Card",
  public__subscription__conflict__paypal__payment_paypal_button: "PayPal",
  public__subscription__conflict__paypal__payment_subtitle:
    "You started creating the subscription on PayPal. How you want to continue payment?",
  public__subscription__conflict__paypal__payment_title: "Payment",
  public__subscription__failed_payment__button: "OK",
  public__subscription__failed_payment__description:
    "Something went wrong, and the transaction was canceled. Please try subscribing and submitting payment again.",
  public__subscription__failed_payment__our_side_button: "Ok",
  public__subscription__failed_payment__our_side_description:
    "We couldn't process your subscription. Please try again. If the issue persists, contact support.",
  public__subscription__failed_payment__our_side_title:
    "Subscription Setup Failed",
  public__subscription__failed_payment__title: "Transaction failed",
  public__subscription__features__included:
    "The following features are included in every plan",
  public__subscription__payment__apple_pay:
    "Click below to pay with Apple Pay:",
  public__subscription__payment__google_pay:
    "Click below to pay with Google Pay:",
  public__subscription__payment__processing: "Processing your payment...",
  public__subscription__payment_details: "Payment Details",
  public__subscription__paypal_cta_info: "Click below to pay with PayPal:",
  public__subscription__plan_selection: "Plan Selection",
  public__subscription__qr_ready: "QR Ready",
  public__subscription__secure_checkout: "Secure checkout",
  public__subscription__stripe_form__card_holder_invalid:
    "Invalid cardholder name.",
  public__subscription__stripe_form__card_holder_label: "Cardholder’s name",
  public__subscription__stripe_form__card_holder_placeholder:
    "e.g. Judith Williams",
  public__subscription__stripe_form__card_number_label: "Card number",
  public__subscription__stripe_form__cvv_label: "CVV Code",
  public__subscription__stripe_form__edit_card__confirm_button: "Confirm",
  public__subscription__stripe_form__expiration_label: "Expiration date",
  public__subscription__stripe_form__expiration_placeholder: "MM / YY",
  public__subscription__stripe_form__info:
    'By clicking "Get my QR code" you agree to be charged {priceWithCurrency} now and accept our [Terms of use]({termsOfUseRoute}) and [Privacy Policy]({privacyPolicyRoute}).',
  public__subscription__submit_button: "Get my QR code",
  public__subscription__success_payment__button: "Go to my QR codes",
  public__subscription__success_payment__text:
    "Your account has been created successfully, you now have access to qrcreate.com and all its functions.",
  public__subscription__success_payment__title: "Congratulations!",
  public__subscription__success_plans_payment__button: "Manage my QR codes",
  public__subscription__success_plans_payment__text:
    "Your account has now been upgraded and all QR codes are now active! You can continue using all of My QR Code functions.",
  public__subscription__success_plans_payment__title: "Success!",
  public__subscription__summary__bill_info:
    "By providing your card information, you allow QRcreate to charge your card for future payments in accordance with their terms.",
  public__subscription__summary__duration_plan:
    "{count, plural, one {{duration} Month Plan:} other {{duration} Months Plan:}}",
  public__subscription__summary__features_title: "Features",
  public__subscription__summary__total: "Total:",
  public__subscription__summary_title: "Summary:",
  public__qr__page__landing__general__faq__subTitle:
    "Get answers to your questions about QR codes",
  public__qr__download__success__analytics_button: "Track Analytics",
  public__qr__download__success__description:
    "<li>Update your QR code's details anytime—even after it's printed!</li>\n<li>Monitor the performance of your QR codes with insightful analytics.</li>\n<li>Create as many QR codes as you need.</li>\n<li>Explore various QR code types and functionalities.</li>\n<li>Personalize your QR codes with custom logos, colors, and styles.</li>",
  public__qr__download__success__manage_button: "Manage QR Codes",
  public__qr__download__success__subtitle: "Log in and explore our features",
  public__qr__download__success__title: "Your QR code is ready to use!",
  public__qr_page__offer__success_page_description:
    "Your account has now been upgraded and all QR codes are now active! You can continue using all of My QR Code functions.",
  public__timezone__region__arctic: "Arctic",
  public__timezone__region__atlantic: "Atlantic",
  public__timezone__region__indian: "Indian",
  ui__color_picker__mode_switch__palette: "Palette",
  ui__color_picker__mode_switch__solid: "Solid",
  ui__field_validation_errors__email__generic:
    "You have entered an invalid email address. Please try again.",
  ui__field_validation_errors__generic__max_length:
    "This field cannot include more than {length} characters.",
  ui__field_validation_errors__generic__min_max:
    "This field must contain between {min} and {max} characters.",
  ui__field_validation_errors__generic__required:
    "This field is required and cannot be left blank.",
  ui__field_validation_errors__generic__socials_min__required:
    "At least {count} social media link is required.",
  ui__field_validation_errors__paste_limit_exceeded:
    "Only the first 500 characters were pasted. Extra text was removed.",
  ui__field_validation_errors__phone__max_length:
    "Phone number cannot exceed {maxDigits} digits.",
  ui__field_validation_errors__platform_link_required:
    "Choose at least one store below and add a link to your app",
  ui__field_validation_errors__postal_code__end_and_start:
    "Should start and end with a number or a letter",
  ui__field_validation_errors__postal_code__invalid_format: "Invalid postcode",
  ui__field_validation_errors__qr_name__generic: "Name is required",
  ui__field_validation_errors__social_links__min:
    "At least 1 social media link is required.",
  ui__field_validation_errors__url__generic:
    "You have entered an invalid link.",
  ui__file_upload__delete_button: "Delete",
  ui__file_upload__file_size_error: "File must be smaller than {maxSize}MB",
  ui__file_upload__image_size_error:
    "Image dimensions must be smaller than or equal to {width} x {height}",
  ui__file_upload__max_image_size: "Maximum size: {size}MB",
  ui__file_upload__unsupported_format_error:
    "Only jpg, png or svg formats are supported.",
  ui__file_upload__unsupported_pdf_format_error: "Only PDF format is allowed.",
  ui__file_upload__upload_image: "Upload image (jpg, png, svg)",
  ui__generic__back: "Back",
  ui__generic__cancel: "Cancel",
  ui__generic__confirm: "Confirm",
  ui__generic__continue: "Continue",
  ui__generic__ok: "OK",
  ui__generic__save: "Save",
  ui__generic__see_more: "See more",
  ui__generic__transparent: "transparent",
  ui__image_crop_dialog__save_button: "Save",
  ui__image_crop_dialog__zoom: "Zoom",
  ui__input_placeholders__url: "e.g. www.pauljones.com",
  ui__onboarding_screen__col_2__guarantee: "30-day money-back guarantee",
  ui__onboarding_screen__col_2__title: "Your QR code is ready!",
  ui__popup__close_button: "Close",
  ui__toast__title__error: "Error",
  ui__toast__title__info: "Info",
  ui__toast__title__success: "Success",
  ui__toast__title__warning: "Warning",
  dashboard__account__settings__delete_account__reason_1:
    "QRcreate campaign is over",
  dashboard__leave_review__title: "Do you like using QRcreate?",
  dashboard__trial_expired__modal_upgrade_title:
    "To continue using QRcreate without interruptions, upgrade your account.",
  dashboard__trial_expired__modal_upgrade_title__premium_canceled:
    "To continue using QRcreate without interruptions and reactivate your QR codes, upgrade your account.",
  generator__step_3__illustration: "Customize design",
  public__alt_landing__hero_section__title: "Get your QR code instantly",
  public__footer__copyright_clone1: "2025 © QRcreate.com™ All rights reserved",
  public__footer__description:
    "Turn your links, promotions, and projects into instant connections with QR codes.",
  public__landing__bottom_banner__description:
    "Create personalized dynamic QR codes with ease. Boost their effectiveness using advanced analytics and branding tools, and modify your QR codes at any time.",
  public__landing__bottom_banner__title: "Start Generating Powerful QR Codes!",
  public__landing__brands__title: "Trusted by leading brands",
  public__landing__faq__basics__1__description:
    "A QR code generator is a tool that lets you create scannable QR codes that open digital content such as websites, files, contact details, or app pages. These codes make it easy to share information instantly with anyone using a smartphone.",
  public__landing__faq__basics__1__title: "What is a QR code generator?",
  public__landing__faq__basics__2__description:
    "Anyone can create a QR code — no technical skills required. QR codes can be generated for links, PDFs, images, social media pages, videos, digital menus, and more.",
  public__landing__faq__basics__2__title: "Who can create a QR code?",
  public__landing__faq__basics__3__description:
    "Yes. QR codes are widely used for commercial purposes, including marketing campaigns, product packaging, business cards, menus, and advertisements.",
  public__landing__faq__basics__3__title:
    "Can QR codes be used for business or marketing purposes?",
  public__landing__faq__basics__4__description:
    "QR codes can link to websites, PDFs, images, videos, app store pages, social profiles, digital business pages, Wi-Fi access, and text-based information.",
  public__landing__faq__basics__4__title:
    "What types of content can a QR code open?",
  public__landing__faq__description:
    "Looking for answers? Check if you can find them here or <contactLink>contact us</contactLink>",
  public__landing__faq__generating__1__description:
    "Static QR codes contain fixed information that cannot be changed after creation. Dynamic QR codes, which our app offers, allow you to update the linked content or destination at any time without reprinting the QR code. This makes them ideal for content that changes frequently.\nWi-Fi QR codes are an exception — they are static because the network details are encoded directly into the QR code and must be reprinted if changed.",
  public__landing__faq__generating__1__title:
    "What is the difference between static and dynamic QR codes?",
  public__landing__faq__generating__2__description:
    "Yes, dynamic QR codes can be edited at any time. If you need to change the destination of a static QR code (such as Wi-Fi), a new code must be generated and reprinted.",
  public__landing__faq__generating__2__title:
    "Can I edit a QR code after creating it?",
  public__landing__faq__generating__3__description:
    "Yes. You can customize colors, patterns, corners, borders, and add a logo to match your brand or design requirements.",
  public__landing__faq__generating__3__title:
    "Can I customize how my QR code looks?",
  public__landing__faq__generating__4__description:
    "Absolutely. One QR code can be used across printed materials, packaging, websites, emails, and digital screens.",
  public__landing__faq__generating__4__title:
    "Can I use the same QR code in multiple places?",
  public__landing__faq__generating__5__description:
    "Yes. Most QR code types automatically open a hosted landing page when scanned. You simply fill in the relevant information, and the QR code directs users to that page.\nURL and Wi-Fi QR codes are exceptions — these open the provided link or network details directly instead of a hosted landing page.",
  public__landing__faq__generating__5__title:
    "Do QR codes open built-in landing pages?",
  public__landing__faq__printing__1__description:
    "Most modern smartphones can scan QR codes directly using the built-in camera. No additional app is required in most cases.",
  public__landing__faq__printing__1__title: "How do users scan a QR code?",
  public__landing__faq__printing__2__description:
    "For reliable scanning, a QR code should be at least 1 × 1 cm (0.4 × 0.4 inches). Larger sizes are recommended for long-distance scanning.",
  public__landing__faq__printing__2__title:
    "What is the minimum size for printing a QR code?",
  public__landing__faq__printing__3__description:
    "SVG is the best format for print because it’s a vector file that scales without losing quality. This ensures sharp, readable codes at any size.",
  public__landing__faq__printing__3__title:
    "Which file format is best for printing QR codes?",
  public__landing__faq__printing__4__description:
    "PNG or JPG formats work best for websites, emails, and digital displays due to fast loading times and broad compatibility.",
  public__landing__faq__printing__4__title:
    "Which file format is best for web use?",
  public__landing__faq__printing__5__description:
    "Yes. Dynamic QR codes include scan tracking, showing data such as total scans, location, time, and device type.",
  public__landing__faq__printing__5__title:
    "Can I track how many times my QR code is scanned?",
  public__landing__faq__printing__6__description:
    "QR codes are compatible with all modern smartphones and can also be scanned using tablets, laptops, or desktops equipped with a camera and scanning software.",
  public__landing__faq__printing__6__title:
    "Will QR codes work on all devices?",
  public__landing__faq__tabs__basics: "Basics",
  public__landing__faq__tabs__generating: "Generating",
  public__landing__faq__tabs__printing_and_scanning: "Printing & scanning",
  public__landing__faq__title: "Frequently asked questions",
  public__landing__hero__description:
    "Quickly generate and fully personalize your QR code in just a few simple clicks.",
  public__landing__hero__tag: "The best QR code generator",
  public__landing__hero__title: "Generate your QR code in just seconds.",
  public__landing__showcase__app_type_description:
    "One QR code is all it takes to send users straight to your app on the App Store or Google Play. Customize the design to match your brand and make your app stand out.",
  public__landing__showcase__business_page_type_description:
    "Share your company information using a business page QR code. The clean landing page can display your business details, opening hours, and key information, with a customizable button linking to any external URL — for example, an appointment booking page.",
  public__landing__showcase__facebook_type_description:
    "Increase engagement by adding a QR code to your printed materials that links directly to your Facebook page. It’s a simple way to grow your audience and encourage interaction.",
  public__landing__showcase__images_type_description:
    "If visuals are central to your brand, a QR code makes it easy to link to an image gallery. Showcase portfolios, artwork, event highlights, or design projects with a single scan.",
  public__landing__showcase__menu_type_description:
    "Run a restaurant or bar? A QR code can link directly to your digital menu, giving guests quick access to your food and drink selection. Update your menu anytime to keep it current.",
  public__landing__showcase__pdf_type_description:
    "Give your customers instant access to all the information they need. A customizable QR code lets them open content-rich PDFs, download them quickly, and save or share them with ease.",
  public__landing__showcase__simple_text_type_description:
    "Share any type of text — from product details and serial numbers to info cards — through a custom QR code. Engage users instantly and update the content in real time whenever needed.",
  public__landing__showcase__social_media_type_description:
    "Use a single QR code to connect users to all your social media profiles. With one scan, they can follow you on the platforms they use most.",
  public__landing__showcase__tabs_card__description:
    "Whatever content you want to share, there’s a QR code for it. Click the icons below to explore options and see examples.",
  public__landing__showcase__tabs_card__title: "QR codes for every use",
  public__landing__showcase__url_type_description:
    "Your QR code directs users to any link you choose. A quick scan with a smartphone opens your selected webpage instantly — simple, fast, and reliable.",
  public__landing__showcase__vcard_type_description:
    "Upgrade your digital business card with a QR code that links to your information and allows contacts to save your vCard directly to their phone. You can update the linked content anytime without changing the QR code.",
  public__landing__showcase__video_type_description:
    "Place a QR code on brochures, posters, flyers, or other materials to give instant access to video content. Bring your printed assets to life, grab attention, and strengthen your brand presence.",
  public__landing__showcase__wifi_type_description:
    "Let guests join your Wi-Fi with a simple scan instead of manual passwords. The QR code provides fast, hassle-free access to your network. Since the Wi-Fi data is built into the code, any changes will require generating and reprinting a new QR code.",
  public__landing__steps__description:
    "Turn ordinary links into powerful visual connections",
  public__landing__steps__step_1__description:
    "Choose what you want to share — link websites, PDFs, menus, videos, apps, and more!",
  public__landing__steps__step_1__title: "Pick your QR code content",
  public__landing__steps__step_2__description:
    "Easily customize your QR code with logos, colors, frames, patterns, and styles at QRcreate.com™.",
  public__landing__steps__step_2__title: "Personalize the design",
  public__landing__steps__step_3__description:
    "Choose PNG, SVG, or JPG and use your QR code anywhere.",
  public__landing__steps__step_3__title: "Download your QR code",
  public__landing__steps__tag: "3 easy steps",
  public__landing__steps__title: "Create a unique QR code that stands out",
  public__landing__testimonials__average: "4,9",
  public__landing__testimonials__reviews_count:
    "Based on <strong>{count} reviews</strong>",
  public__landing__testimonials__tag: "Testimonials",
  public__landing__testimonials__testimonial_1__description:
    "“ Setting up QR codes was straightforward, and being able to update the content without reprinting saved us a lot of time and cost. It’s now a core part of how we share information. “",
  public__landing__testimonials__testimonial_1__name: "Emma Thompson",
  public__landing__testimonials__testimonial_1__profession: "Marketing Manager",
  public__landing__testimonials__testimonial_1__title:
    "Easy to manage and flexible",
  public__landing__testimonials__testimonial_2__description:
    "“ We use QR codes across print and digital materials, and the built-in landing pages make everything simple. No technical setup, just fill in the details and publish. “",
  public__landing__testimonials__testimonial_2__name: "James Lawson",
  public__landing__testimonials__testimonial_2__profession: "Sales Director",
  public__landing__testimonials__testimonial_3__description:
    "“ The customization options helped us match our QR codes to our brand, and scan tracking gave us useful insights into how people engage with our content. “",
  public__landing__testimonials__testimonial_3__name: "Lily Brown",
  public__landing__testimonials__testimonial_3__profession: "Graphic Designer",
  public__landing__testimonials__title: "Trusted by people",
  qr_page__offer__success_page_description:
    "Your account has now been upgraded and all QR codes are now active! You can continue using all of QRcreate functions.",
  test_key_plural: "{count, plural, one {Item} other {{count} Items }}",
  test_key_plural_2: '{"one":"Day","other":"{days} Days "}',
  test_key_plural_3: "{months, plural, one {Month} other {{months} Months }}",
  test_key_plural_months:
    "{months, plural, one {month} other {{months} Months }}",
  "upladButton.filePreviews.pdf.caption": "Size: {size} MB",
};

export default enTranslations;
