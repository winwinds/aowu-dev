import Vue, { PluginObject } from 'vue'
import { AowuUIComponent } from './component'
import { AowuButton } from './button'

/** The version of aowu-ui */
export const version: string

export function install(vue: typeof Vue): void

/** AowuUI component common definition */
export type Component = AowuUIComponent

/** Button Component */
export class Button extends AowuButton { }
