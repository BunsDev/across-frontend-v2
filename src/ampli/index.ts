/* tslint:disable */
/* eslint-disable */
/**
 * Ampli - A strong typed wrapper for your Analytics
 *
 * This file is generated by Amplitude.
 * To update run 'ampli pull web'
 *
 * Required dependencies: @amplitude/analytics-browser@^1.3.0
 * Tracking Plan Version: 18
 * Build: 1.0.0
 * Runtime: browser:typescript-ampli-v2
 *
 * [View Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest)
 *
 * [Full Setup Instructions](https://data.amplitude.com/risklabs/Risk%20Labs/implementation/web)
 */

import * as amplitude from "@amplitude/analytics-browser";

export type Environment = "production" | "development";

export const ApiKey: Record<Environment, string> = {
  production: "",
  development: "",
};

/**
 * Default Amplitude configuration options. Contains tracking plan information.
 */
export const DefaultConfiguration: BrowserOptions = {
  plan: {
    version: "18",
    branch: "main",
    source: "web",
    versionId: "284c0da5-b98e-485b-ba38-09ebb05de5f5",
  },
  ...{
    ingestionMetadata: {
      sourceName: "browser-typescript-ampli",
      sourceVersion: "2.0.0",
    },
  },
};

export interface LoadOptionsBase {
  disabled?: boolean;
}

export type LoadOptionsWithEnvironment = LoadOptionsBase & {
  environment: Environment;
  client?: { configuration?: BrowserOptions };
};
export type LoadOptionsWithApiKey = LoadOptionsBase & {
  client: { apiKey: string; configuration?: BrowserOptions };
};
export type LoadOptionsWithClientInstance = LoadOptionsBase & {
  client: { instance: BrowserClient };
};

export type LoadOptions =
  | LoadOptionsWithEnvironment
  | LoadOptionsWithApiKey
  | LoadOptionsWithClientInstance;

export interface IdentifyProperties {
  /**
   * List of wallet addresses connected during Wallet Connect Transaction Completed event.
   *
   * | Rule | Value |
   * |---|---|
   * | Unique Items | true |
   * | Item Type | string |
   */
  allWalletAddressesConnected?: string[];
  /**
   * Chain ids of wallet addresses connected
   *
   * | Rule | Value |
   * |---|---|
   * | Unique Items | true |
   * | Item Type | string |
   */
  allWalletChainIds?: string[];
  initial_dclid?: any;
  initial_fbclid?: any;
  initial_gbraid?: any;
  initial_gclid?: any;
  initial_ko_click_id?: any;
  initial_msclkid?: any;
  initial_referrer?: any;
  initial_referring_domain?: any;
  initial_ttclid?: any;
  initial_twclid?: any;
  initial_utm_campaign?: any;
  initial_utm_content?: any;
  initial_utm_id?: any;
  initial_utm_medium?: any;
  initial_utm_source?: any;
  initial_utm_term?: any;
  initial_wbraid?: any;
  /**
   * Total volume of bridge transfers (since event tracking was implemented). Updated on each new transfer the user completes.
   */
  totalVolumeUsd?: string;
  /**
   * Currently connected wallet address
   */
  walletAddress?: string;
  /**
   * Type of wallet connected
   */
  walletType?: string;
}

export interface ConnectWalletButtonClickedProperties {
  /**
   * Action user did to trigger the event.
   *
   * | Rule | Value |
   * |---|---|
   * | Enum Values | onClick, onKeyPress |
   */
  action: "onClick" | "onKeyPress";
  /**
   * | Rule | Value |
   * |---|---|
   * | Enum Values | connectWalletButton, web3OnboardModal |
   */
  element: "connectWalletButton" | "web3OnboardModal";
  /**
   * | Rule | Value |
   * |---|---|
   * | Enum Values | splashPage, bridgePage, poolPage, rewardsPage, transactionsPage, stakingPage, referralPage, airdropPage, 404Page |
   */
  page:
    | "splashPage"
    | "bridgePage"
    | "poolPage"
    | "rewardsPage"
    | "transactionsPage"
    | "stakingPage"
    | "referralPage"
    | "airdropPage"
    | "404Page";
  /**
   * | Rule | Value |
   * |---|---|
   * | Enum Values | navbar, mobileNavSidebar, addLiquidityForm, removeLiquidityForm, airdropSplashFlow, referralTable, rewardsTable, stakeFrom, unstakeForm, myTransactionsTable, bridgeForm, claimReferralRewardsForm |
   */
  section:
    | "navbar"
    | "mobileNavSidebar"
    | "addLiquidityForm"
    | "removeLiquidityForm"
    | "airdropSplashFlow"
    | "referralTable"
    | "rewardsTable"
    | "stakeFrom"
    | "unstakeForm"
    | "myTransactionsTable"
    | "bridgeForm"
    | "claimReferralRewardsForm";
}

export interface DisconnectWalletButtonClickedProperties {
  /**
   * Action user did to trigger the event.
   */
  action: string;
  element: string;
  /**
   * | Rule | Value |
   * |---|---|
   * | Enum Values | splashPage, bridgePage, poolPage, rewardsPage, transactionsPage, stakingPage, referralPage, airdropPage, 404Page |
   */
  page:
    | "splashPage"
    | "bridgePage"
    | "poolPage"
    | "rewardsPage"
    | "transactionsPage"
    | "stakingPage"
    | "referralPage"
    | "airdropPage"
    | "404Page";
  section: string;
}

export interface FromChainSelectedProperties {
  /**
   * Name of the fromChain
   */
  chainName: string;
  /**
   * Id of the fromChain
   */
  fromChainId: string;
}

export interface MaxTokenAmountClickedProperties {
  /**
   * Action user did to trigger the event.
   */
  action: string;
  element: string;
  page: string;
  section: string;
}

export interface PageViewedProperties {
  /**
   * Hash to identify the UI version when event was triggered
   */
  gitCommitHash: string;
  /**
   * Boolean if this is first time identifed user has visited page. Should be Null for anonymous users.
   */
  isInitialPageView: boolean;
  origin: string;
  /**
   * | Rule | Value |
   * |---|---|
   * | Enum Values | splashPage, bridgePage, poolPage, rewardsPage, transactionsPage, stakingPage, referralPage, airdropPage, 404Page |
   */
  page:
    | "splashPage"
    | "bridgePage"
    | "poolPage"
    | "rewardsPage"
    | "transactionsPage"
    | "stakingPage"
    | "referralPage"
    | "airdropPage"
    | "404Page";
  path: string;
  /**
   * Referring url
   */
  referrer: string;
}

export interface ToAccountChangedProperties {
  /**
   * Recipient wallet address
   */
  toWalletAddress: string;
}

export interface ToChainSelectedProperties {
  /**
   * Name of the toChain
   */
  chainName: string;
  /**
   * Id of the toChain
   */
  toChainId: string;
}

export interface TokenSelectedProperties {
  /**
   * Position of the asset in the list
   */
  tokenListIndex: string;
  /**
   * Length of the asset list
   */
  tokenListLength: string;
  /**
   * Symbol of bridge token
   */
  tokenSymbol: string;
}

export interface TransferQuoteRecievedProperties {
  /**
   * Capital fee percent, in decimals
   */
  capitalFeePct: string;
  /**
   * Capital fee in the bridge token, in decimals
   */
  capitalFeeTotal: string;
  /**
   * Capital fee in USD
   */
  capitalFeeTotalUsd: string;
  /**
   * Expected fill time in minutes, as displayed in the UI for the asset and route selected
   */
  expectedFillTimeInMinutes: string;
  /**
   * From amount in the bridge token, in decimals
   */
  fromAmount: string;
  /**
   * From amount in USD
   */
  fromAmountUsd: string;
  /**
   * From chain id
   */
  fromChainId: string;
  /**
   * From chain name
   */
  fromChainName: string;
  isAmountTooLow: string;
  /**
   * Boolean if sender and recipient address are equal.
   */
  isSenderEqRecipient: string;
  /**
   * Lp fee percent, in decimals
   */
  lpFeePct: string;
  /**
   * Lp fee in the bridge token, in decimals
   */
  lpFeeTotal: string;
  /**
   * Lp fee in USD
   */
  lpFeeTotalUsd: string;
  /**
   * Latency for FE to recieve quote in millisec
   */
  quoteLatencyMilliseconds: string;
  /**
   * Timestamp the FE recieves quote (may be different from the event timestamp)
   */
  quoteTimestamp: string;
  /**
   * Recipient wallet address
   */
  recipient: string;
  /**
   * Relay fee percent, in decimals
   */
  relayFeePct: string;
  /**
   * Relay fee in the gas token, in decimals
   */
  relayFeeTotal: string;
  /**
   * Relay fee in USD
   */
  relayFeeTotalUsd: string;
  /**
   * Relayer gas fee percent, in decimals
   */
  relayGasFeePct: string;
  /**
   * Relayer gas fee in the gas token, in decimals
   */
  relayGasFeeTotal: string;
  /**
   * Relayer fee in USD
   */
  relayGasFeeTotalUsd: string;
  /**
   * Route "{fromChainId}-{toChainId}"
   */
  routeChainIdFromTo: string;
  /**
   * Route "{fromChainName}-{toChainName}"
   */
  routeChainNameFromTo: string;
  /**
   * Sender wallet address
   */
  sender: string;
  /**
   * To amount of bridge token, in decimals
   */
  toAmount: string;
  /**
   * To amount in USD
   */
  toAmountUsd: string;
  /**
   * Id of the toChain
   */
  toChainId: string;
  /**
   * Name of the toChain
   */
  toChainName: string;
  /**
   * Symbol of bridge token
   */
  tokenSymbol: string;
  /**
   * Total bridge fee in the bridge token, in decimals
   */
  totalBridgeFee: string;
  /**
   * Total bridge fee percent, in decimals
   */
  totalBridgeFeePct: string;
  /**
   * Total bridge fee in USD
   */
  totalBridgeFeeUsd: string;
  transferQuoteBlockNumber: string;
}

export interface TransferSignedProperties {
  /**
   * Capital fee percent, in decimals
   */
  capitalFeePct: string;
  /**
   * Capital fee in the bridge token, in decimals
   */
  capitalFeeTotal: string;
  /**
   * Capital fee in USD
   */
  capitalFeeTotalUsd: string;
  /**
   * From amount in the bridge token, in decimals
   */
  fromAmount: string;
  /**
   * From amount in USD
   */
  fromAmountUsd: string;
  /**
   * From chain id
   */
  fromChainId: string;
  /**
   * From chain name
   */
  fromChainName: string;
  /**
   * Token address of bridge token on from chain
   */
  fromTokenAddress: string;
  isAmountTooLow: string;
  /**
   * Lp fee percent, in decimals
   */
  lpFeePct: string;
  /**
   * Lp fee in the bridge token, in decimals
   */
  lpFeeTotal: string;
  /**
   * Lp fee in USD
   */
  lpFeeTotalUsd: string;
  /**
   * Recipient wallet address
   */
  recipient: string;
  /**
   * Address of referee, null if no referral used
   */
  referralProgramAddress: string;
  /**
   * Relay fee percent, in decimals
   */
  relayFeePct: string;
  /**
   * Relay fee in the gas token, in decimals
   */
  relayFeeTotal: string;
  /**
   * Relay fee in USD
   */
  relayFeeTotalUsd: string;
  /**
   * Relayer gas fee percent, in decimals
   */
  relayGasFeePct: string;
  /**
   * Relayer gas fee in the gas token, in decimals
   */
  relayGasFeeTotal: string;
  /**
   * Relayer fee in USD
   */
  relayGasFeeTotalUsd: string;
  /**
   * Route "{fromChainId}-{toChainId}"
   */
  routeChainIdFromTo: string;
  /**
   * Route "{fromChainName}-{toChainName}"
   */
  routeChainNameFromTo: string;
  /**
   * Sender wallet address
   */
  sender: string;
  /**
   * Duration in milliseconds between TransferSubmitted event to the TransferSigned event
   */
  timeFromTransferSubmittedToTransferSignedInMilliseconds: string;
  /**
   * To amount of bridge token, in decimals
   */
  toAmount: string;
  /**
   * To amount in USD
   */
  toAmountUsd: string;
  /**
   * Id of the toChain
   */
  toChainId: string;
  /**
   * Name of the toChain
   */
  toChainName: string;
  /**
   * Symbol of bridge token
   */
  tokenSymbol: string;
  /**
   * Total bridge fee in the bridge token, in decimals
   */
  totalBridgeFee: string;
  /**
   * Total bridge fee percent, in decimals
   */
  totalBridgeFeePct: string;
  /**
   * Total bridge fee in USD
   */
  totalBridgeFeeUsd: string;
  /**
   * Token address of bridge token on to chain
   */
  toTokenAddress: string;
  /**
   * Resulting transaction hash of transaction, null if "result" if SwapSigned event = failed
   */
  transactionHash: string;
}

export interface TransferSubmittedProperties {
  /**
   * Capital fee percent, in decimals
   */
  capitalFeePct: string;
  /**
   * Capital fee in the bridge token, in decimals
   */
  capitalFeeTotal: string;
  /**
   * Capital fee in USD
   */
  capitalFeeTotalUsd: string;
  /**
   * From amount in the bridge token, in decimals
   */
  fromAmount: string;
  /**
   * From amount in USD
   */
  fromAmountUsd: string;
  /**
   * From chain id
   */
  fromChainId: string;
  /**
   * From chain name
   */
  fromChainName: string;
  /**
   * Token address of bridge token on from chain
   */
  fromTokenAddress: string;
  /**
   * Fee is too large to do the transfer, e.g. if the gas fees on the destination are $1, but you're trying to send $0.10, the amount is too low for the relayer's gas cost.
   */
  isAmountTooLow: string;
  /**
   * Lp fee percent, in decimals
   */
  lpFeePct: string;
  /**
   * Lp fee in the bridge token, in decimals
   */
  lpFeeTotal: string;
  /**
   * Lp fee in USD
   */
  lpFeeTotalUsd: string;
  /**
   * Recipient wallet address
   */
  recipient: string;
  /**
   * Address of referee, null if no referral used
   */
  referralProgramAddress: string;
  /**
   * Relay fee percent, in decimals
   */
  relayFeePct: string;
  /**
   * Relay fee in the gas token, in decimals
   */
  relayFeeTotal: string;
  /**
   * Relay fee in USD
   */
  relayFeeTotalUsd: string;
  /**
   * Relayer gas fee percent, in decimals
   */
  relayGasFeePct: string;
  /**
   * Relayer gas fee in the gas token, in decimals
   */
  relayGasFeeTotal: string;
  /**
   * Relayer fee in USD
   */
  relayGasFeeTotalUsd: string;
  /**
   * Route "{fromChainId}-{toChainId}"
   */
  routeChainIdFromTo: string;
  /**
   * Route "{fromChainName}-{toChainName}"
   */
  routeChainNameFromTo: string;
  /**
   * Sender wallet address
   */
  sender: string;
  /**
   * Duration in milliseconds between first TransferQuoteRecieved event to the TransferSubmitted event
   */
  timeFromFirstQuoteToTransferSubmittedInMilliseconds: string;
  /**
   * To amount of bridge token, in decimals
   */
  toAmount: string;
  /**
   * To amount in USD
   */
  toAmountUsd: string;
  /**
   * Id of the toChain
   */
  toChainId: string;
  /**
   * Name of the toChain
   */
  toChainName: string;
  /**
   * Symbol of bridge token
   */
  tokenSymbol: string;
  /**
   * Total bridge fee in the bridge token, in decimals
   */
  totalBridgeFee: string;
  /**
   * Total bridge fee percent, in decimals
   */
  totalBridgeFeePct: string;
  /**
   * Total bridge fee in USD
   */
  totalBridgeFeeUsd: string;
  /**
   * Token address of bridge token on to chain
   */
  toTokenAddress: string;
  transferQuoteBlockNumber: string;
  /**
   * Timestamp when send button was clicked
   */
  transferTimestamp: string;
}

export interface TransferTransactionCompletedProperties {
  /**
   * Capital fee percent, in decimals
   */
  capitalFeePct: string;
  /**
   * Capital fee in the bridge token, in decimals
   */
  capitalFeeTotal: string;
  /**
   * Capital fee in USD
   */
  capitalFeeTotalUsd: string;
  /**
   * From amount in the bridge token, in decimals
   */
  fromAmount: string;
  /**
   * From amount in USD
   */
  fromAmountUsd: string;
  /**
   * From chain id
   */
  fromChainId: string;
  /**
   * From chain name
   */
  fromChainName: string;
  /**
   * Token address of bridge token on from chain
   */
  fromTokenAddress: string;
  isAmountTooLow: string;
  /**
   * Lp fee percent, in decimals
   */
  lpFeePct: string;
  /**
   * Lp fee in the bridge token, in decimals
   */
  lpFeeTotal: string;
  /**
   * Lp fee in USD
   */
  lpFeeTotalUsd: string;
  /**
   * Gas fee in network token
   */
  NetworkFeeNative: string;
  /**
   * Network native token
   */
  NetworkFeeNativeToken: string;
  /**
   * Gas fee in USD
   */
  NetworkFeeUsd: string;
  /**
   * Recipient wallet address
   */
  recipient: string;
  /**
   * Address of referee, null if no referral used
   */
  referralProgramAddress: string;
  /**
   * Relay fee percent, in decimals
   */
  relayFeePct: string;
  /**
   * Relay fee in the gas token, in decimals
   */
  relayFeeTotal: string;
  /**
   * Relay fee in USD
   */
  relayFeeTotalUsd: string;
  /**
   * Relayer gas fee percent, in decimals
   */
  relayGasFeePct: string;
  /**
   * Relayer gas fee in the gas token, in decimals
   */
  relayGasFeeTotal: string;
  /**
   * Relayer fee in USD
   */
  relayGasFeeTotalUsd: string;
  /**
   * Route "{fromChainId}-{toChainId}"
   */
  routeChainIdFromTo: string;
  /**
   * Route "{fromChainName}-{toChainName}"
   */
  routeChainNameFromTo: string;
  /**
   * Sender wallet address
   */
  sender: string;
  /**
   * Result of chain transaction
   */
  succeeded: string;
  /**
   * Duration in milliseconds between TransferSigned event to the TransferTransactionCompleted event
   */
  timeFromTransferSignedToTransferCompleteInMilliseconds: string;
  /**
   * To amount of bridge token, in decimals
   */
  toAmount: string;
  /**
   * To amount in USD
   */
  toAmountUsd: string;
  /**
   * Id of the toChain
   */
  toChainId: string;
  /**
   * Name of the toChain
   */
  toChainName: string;
  /**
   * Symbol of bridge token
   */
  tokenSymbol: string;
  /**
   * Total bridge fee in the bridge token, in decimals
   */
  totalBridgeFee: string;
  /**
   * Total bridge fee percent, in decimals
   */
  totalBridgeFeePct: string;
  /**
   * Total bridge fee in USD
   */
  totalBridgeFeeUsd: string;
  /**
   * Token address of bridge token on to chain
   */
  toTokenAddress: string;
  /**
   * Resulting transaction hash of transaction, null if "result" if TransferTransactionCompleted = failed
   */
  transactionHash: string;
  /**
   * Timestamp transfer completed
   */
  transferCompleteTimestamp: string;
  transferQuoteBlockNumber: string;
}

export interface WalletConnectTransactionCompletedProperties {
  /**
   * Boolean if wallet connection was a reconnection.
   */
  isReconnect?: boolean;
  /**
   * Result of user signing or rejecting wallet connection
   */
  succeeded: boolean;
  /**
   * Users' wallet address
   */
  walletAddress?: string;
  /**
   * Type of wallet attempted to connect
   */
  walletType?: string;
}

export interface WalletSelectedProperties {
  /**
   * Action user did to trigger the event.
   */
  action: string;
  element: string;
  page: string;
  /**
   * Type of wallet attempted to connect
   */
  walletType?: string;
}

export interface WebVitalsProperties {
  /**
   * Ongoing measurement of how visually stable a website page is
   */
  cumulativeLayoutShift: string;
}

export class Identify implements BaseEvent {
  event_type = "Identify";

  constructor(public event_properties?: IdentifyProperties) {
    this.event_properties = event_properties;
  }
}

export class ApplicationLoaded implements BaseEvent {
  event_type = "ApplicationLoaded";
}

export class ConnectWalletButtonClicked implements BaseEvent {
  event_type = "ConnectWalletButtonClicked";

  constructor(public event_properties: ConnectWalletButtonClickedProperties) {
    this.event_properties = event_properties;
  }
}

export class DisconnectWalletButtonClicked implements BaseEvent {
  event_type = "DisconnectWalletButtonClicked";

  constructor(
    public event_properties: DisconnectWalletButtonClickedProperties
  ) {
    this.event_properties = event_properties;
  }
}

export class FeesInfoExpanded implements BaseEvent {
  event_type = "FeesInfoExpanded";
}

export class FromChainSelected implements BaseEvent {
  event_type = "FromChainSelected";

  constructor(public event_properties: FromChainSelectedProperties) {
    this.event_properties = event_properties;
  }
}

export class MaxTokenAmountClicked implements BaseEvent {
  event_type = "MaxTokenAmountClicked";

  constructor(public event_properties: MaxTokenAmountClickedProperties) {
    this.event_properties = event_properties;
  }
}

export class PageViewed implements BaseEvent {
  event_type = "PageViewed";

  constructor(public event_properties: PageViewedProperties) {
    this.event_properties = event_properties;
  }
}

export class ToAccountChanged implements BaseEvent {
  event_type = "ToAccountChanged";

  constructor(public event_properties: ToAccountChangedProperties) {
    this.event_properties = event_properties;
  }
}

export class ToChainSelected implements BaseEvent {
  event_type = "ToChainSelected";

  constructor(public event_properties: ToChainSelectedProperties) {
    this.event_properties = event_properties;
  }
}

export class TokenSelected implements BaseEvent {
  event_type = "TokenSelected";

  constructor(public event_properties: TokenSelectedProperties) {
    this.event_properties = event_properties;
  }
}

export class TransferQuoteRecieved implements BaseEvent {
  event_type = "TransferQuoteRecieved";

  constructor(public event_properties: TransferQuoteRecievedProperties) {
    this.event_properties = event_properties;
  }
}

export class TransferSigned implements BaseEvent {
  event_type = "TransferSigned";

  constructor(public event_properties: TransferSignedProperties) {
    this.event_properties = event_properties;
  }
}

export class TransferSubmitted implements BaseEvent {
  event_type = "TransferSubmitted";

  constructor(public event_properties: TransferSubmittedProperties) {
    this.event_properties = event_properties;
  }
}

export class TransferTransactionCompleted implements BaseEvent {
  event_type = "TransferTransactionCompleted";

  constructor(public event_properties: TransferTransactionCompletedProperties) {
    this.event_properties = event_properties;
  }
}

export class WalletConnectTransactionCompleted implements BaseEvent {
  event_type = "WalletConnectTransactionCompleted";

  constructor(
    public event_properties: WalletConnectTransactionCompletedProperties
  ) {
    this.event_properties = event_properties;
  }
}

export class WalletSelected implements BaseEvent {
  event_type = "WalletSelected";

  constructor(public event_properties: WalletSelectedProperties) {
    this.event_properties = event_properties;
  }
}

export class WebVitals implements BaseEvent {
  event_type = "WebVitals";

  constructor(public event_properties: WebVitalsProperties) {
    this.event_properties = event_properties;
  }
}

export type PromiseResult<T> = { promise: Promise<T | void> };

const getVoidPromiseResult = () => ({ promise: Promise.resolve() });

// prettier-ignore
export class Ampli {
  private disabled: boolean = false;
  private amplitude?: BrowserClient;

  get client(): BrowserClient {
    this.isInitializedAndEnabled();
    return this.amplitude!;
  }

  get isLoaded(): boolean {
    return this.amplitude != null;
  }

  private isInitializedAndEnabled(): boolean {
    if (!this.amplitude) {
      console.error('ERROR: Ampli is not yet initialized. Have you called ampli.load() on app start?');
      return false;
    }
    return !this.disabled;
  }

  /**
   * Initialize the Ampli SDK. Call once when your application starts.
   *
   * @param options Configuration options to initialize the Ampli SDK with.
   */
  load(options: LoadOptions): PromiseResult<void> {
    this.disabled = options.disabled ?? false;

    if (this.amplitude) {
      console.warn('WARNING: Ampli is already intialized. Ampli.load() should be called once at application startup.');
      return getVoidPromiseResult();
    }

    let apiKey: string | null = null;
    if (options.client && 'apiKey' in options.client) {
      apiKey = options.client.apiKey;
    } else if ('environment' in options) {
      apiKey = ApiKey[options.environment];
    }

    if (options.client && 'instance' in options.client) {
      this.amplitude = options.client.instance;
    } else if (apiKey) {
      this.amplitude = amplitude.createInstance();
      return this.amplitude.init(apiKey, undefined, { ...DefaultConfiguration, ...options.client?.configuration });
    } else {
      console.error("ERROR: ampli.load() requires 'environment', 'client.apiKey', or 'client.instance'");
    }

    return getVoidPromiseResult();
  }

  /**
   * Identify a user and set user properties.
   *
   * @param userId The user's id.
   * @param properties The user properties.
   * @param options Optional event options.
   */
  identify(
    userId: string | undefined,
    properties?: IdentifyProperties,
    options?: EventOptions,
  ): PromiseResult<Result> {
    if (!this.isInitializedAndEnabled()) {
      return getVoidPromiseResult();
    }

    if (userId) {
      options = {...options,  user_id: userId};
    }

    const amplitudeIdentify = new amplitude.Identify();
    const eventProperties = properties;
    if (eventProperties != null) {
      for (const [key, value] of Object.entries(eventProperties)) {
        amplitudeIdentify.set(key, value);
      }
    }
    return this.amplitude!.identify(
      amplitudeIdentify,
      options,
    );
  }

  /**
   * Track event
   *
   * @param event The event to track.
   * @param options Optional event options.
   */
  track(event: Event, options?: EventOptions): PromiseResult<Result> {
    if (!this.isInitializedAndEnabled()) {
      return getVoidPromiseResult();
    }

    return this.amplitude!.track(event, undefined, options);
  }

  /**
   * ApplicationLoaded
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/ApplicationLoaded)
   *
   * App is loaded
   *
   * Owner: James Morris
   *
   * @param options Amplitude event options.
   */
  applicationLoaded(
    options?: EventOptions,
  ) {
    return this.track(new ApplicationLoaded(), options);
  }

  /**
   * ConnectWalletButtonClicked
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/ConnectWalletButtonClicked)
   *
   * User clicks Connect Wallet
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. action)
   * @param options Amplitude event options.
   */
  connectWalletButtonClicked(
    properties: ConnectWalletButtonClickedProperties,
    options?: EventOptions,
  ) {
    return this.track(new ConnectWalletButtonClicked(properties), options);
  }

  /**
   * DisconnectWalletButtonClicked
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/DisconnectWalletButtonClicked)
   *
   * User disconnects wallet
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. action)
   * @param options Amplitude event options.
   */
  disconnectWalletButtonClicked(
    properties: DisconnectWalletButtonClickedProperties,
    options?: EventOptions,
  ) {
    return this.track(new DisconnectWalletButtonClicked(properties), options);
  }

  /**
   * FeesInfoExpanded
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/FeesInfoExpanded)
   *
   * User expands fees info
   *
   * Owner: James Morris
   *
   * @param options Amplitude event options.
   */
  feesInfoExpanded(
    options?: EventOptions,
  ) {
    return this.track(new FeesInfoExpanded(), options);
  }

  /**
   * FromChainSelected
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/FromChainSelected)
   *
   * User selects from chain
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. chainName)
   * @param options Amplitude event options.
   */
  fromChainSelected(
    properties: FromChainSelectedProperties,
    options?: EventOptions,
  ) {
    return this.track(new FromChainSelected(properties), options);
  }

  /**
   * MaxTokenAmountClicked
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/MaxTokenAmountClicked)
   *
   * User clicks max amount
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. action)
   * @param options Amplitude event options.
   */
  maxTokenAmountClicked(
    properties: MaxTokenAmountClickedProperties,
    options?: EventOptions,
  ) {
    return this.track(new MaxTokenAmountClicked(properties), options);
  }

  /**
   * PageViewed
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/PageViewed)
   *
   * User views page
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. gitCommitHash)
   * @param options Amplitude event options.
   */
  pageViewed(
    properties: PageViewedProperties,
    options?: EventOptions,
  ) {
    return this.track(new PageViewed(properties), options);
  }

  /**
   * ToAccountChanged
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/ToAccountChanged)
   *
   * User changes recipient address
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. toWalletAddress)
   * @param options Amplitude event options.
   */
  toAccountChanged(
    properties: ToAccountChangedProperties,
    options?: EventOptions,
  ) {
    return this.track(new ToAccountChanged(properties), options);
  }

  /**
   * ToChainSelected
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/ToChainSelected)
   *
   * User selects from or to chain
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. chainName)
   * @param options Amplitude event options.
   */
  toChainSelected(
    properties: ToChainSelectedProperties,
    options?: EventOptions,
  ) {
    return this.track(new ToChainSelected(properties), options);
  }

  /**
   * TokenSelected
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/TokenSelected)
   *
   * User selects token
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. tokenListIndex)
   * @param options Amplitude event options.
   */
  tokenSelected(
    properties: TokenSelectedProperties,
    options?: EventOptions,
  ) {
    return this.track(new TokenSelected(properties), options);
  }

  /**
   * TransferQuoteRecieved
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/TransferQuoteRecieved)
   *
   * User recieves a quote for bridge transaction
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. capitalFeePct)
   * @param options Amplitude event options.
   */
  transferQuoteRecieved(
    properties: TransferQuoteRecievedProperties,
    options?: EventOptions,
  ) {
    return this.track(new TransferQuoteRecieved(properties), options);
  }

  /**
   * TransferSigned
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/TransferSigned)
   *
   * User signs wallet transaction
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. capitalFeePct)
   * @param options Amplitude event options.
   */
  transferSigned(
    properties: TransferSignedProperties,
    options?: EventOptions,
  ) {
    return this.track(new TransferSigned(properties), options);
  }

  /**
   * TransferSubmitted
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/TransferSubmitted)
   *
   * User clicks send button
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. capitalFeePct)
   * @param options Amplitude event options.
   */
  transferSubmitted(
    properties: TransferSubmittedProperties,
    options?: EventOptions,
  ) {
    return this.track(new TransferSubmitted(properties), options);
  }

  /**
   * TransferTransactionCompleted
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/TransferTransactionCompleted)
   *
   * On-chain transfer completed
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. capitalFeePct)
   * @param options Amplitude event options.
   */
  transferTransactionCompleted(
    properties: TransferTransactionCompletedProperties,
    options?: EventOptions,
  ) {
    return this.track(new TransferTransactionCompleted(properties), options);
  }

  /**
   * WalletConnectTransactionCompleted
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/WalletConnectTransactionCompleted)
   *
   * User rejects or approves wallet connection
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. isReconnect)
   * @param options Amplitude event options.
   */
  walletConnectTransactionCompleted(
    properties: WalletConnectTransactionCompletedProperties,
    options?: EventOptions,
  ) {
    return this.track(new WalletConnectTransactionCompleted(properties), options);
  }

  /**
   * WalletSelected
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/WalletSelected)
   *
   * User selects wallet to connect
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. action)
   * @param options Amplitude event options.
   */
  walletSelected(
    properties: WalletSelectedProperties,
    options?: EventOptions,
  ) {
    return this.track(new WalletSelected(properties), options);
  }

  /**
   * WebVitals
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/WebVitals)
   *
   * Properties to track health of UI
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. cumulativeLayoutShift)
   * @param options Amplitude event options.
   */
  webVitals(
    properties: WebVitalsProperties,
    options?: EventOptions,
  ) {
    return this.track(new WebVitals(properties), options);
  }
}

export const ampli = new Ampli();

// BASE TYPES
type BrowserOptions = amplitude.Types.BrowserOptions;

export type BrowserClient = amplitude.Types.BrowserClient;
export type BaseEvent = amplitude.Types.BaseEvent;
export type IdentifyEvent = amplitude.Types.IdentifyEvent;
export type GroupEvent = amplitude.Types.GroupIdentifyEvent;
export type Event = amplitude.Types.Event;
export type EventOptions = amplitude.Types.EventOptions;
export type Result = amplitude.Types.Result;
