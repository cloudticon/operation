import * as core from '@actions/core';
import {createCtClient} from "./createCtClient";
import {getFunction} from "./getFunction";
import {getContext} from "./getContext";
import {getHelpers} from "./getHelpers";

const funcPath = core.getInput('function' );
const url = core.getInput('url' );
const token = core.getInput('token', { required: true });
const context = getContext();
const ct = createCtClient(url, token);
const helpers = getHelpers(ct, context);
const func = getFunction(funcPath);

func({ct, context, ...helpers})