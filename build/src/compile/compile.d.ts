import * as log from '../log';
import { ExtendedSpec } from '../spec';
import { Model } from './model';
export declare function compile(inputSpec: ExtendedSpec, logger?: log.LoggerInterface): {
    spec: {
        $schema: string;
    } & {
        padding: number | {
            top?: number;
            bottom?: number;
            left?: number;
            right?: number;
        };
    } & {
        autosize: string;
    } & {} & {} & {
        signals: {
            name: string;
            update: string;
        }[];
    } & {
        data: any[];
        marks: any[];
    };
};
export declare function topLevelBasicProperties(model: Model): {
    padding: number | {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
} & {
    autosize: string;
} & {} & {};
export declare function assembleRootGroup(model: Model): any;