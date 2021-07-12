import { ConnectorUpdate } from '@web3-react/types';
import { AbstractConnector } from '@web3-react/abstract-connector';
import Web3ProviderEngine from 'web3-provider-engine';
interface LedgerConnectorArguments {
    chainId: number;
    url: string;
    pollingInterval?: number;
    requestTimeoutMs?: number;
    accountFetchingConfigs?: any;
    baseDerivationPath?: string;
}
export declare class LedgerConnector extends AbstractConnector {
    private readonly chainId;
    private readonly url;
    private readonly pollingInterval?;
    private readonly requestTimeoutMs?;
    private baseDerivationPath?;
    private provider;
    constructor({ chainId, url, pollingInterval, requestTimeoutMs, baseDerivationPath }: LedgerConnectorArguments);
    activate(baseDerivationPath?: string): Promise<ConnectorUpdate>;
    getProvider(): Promise<Web3ProviderEngine>;
    getChainId(): Promise<number>;
    getAccount(): Promise<null>;
    getAccounts(page?: number): Promise<string[]>;
    getAccountIndex(): number;
    setAccountIndex(index: number): Promise<string>;
    deactivate(): void;
}
export {};
