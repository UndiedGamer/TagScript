import { AnyChannel, Guild, MessageEmbedOptions } from 'discord.js';
import 'tagscript';

declare module 'tagscript' {
	export interface IActions {
		cooldown?: {
			cooldown: number;
			message: string | null;
		};
		embed?: MessageEmbedOptions;
		deleteMessage?: boolean;
		silentResponse?: boolean;
		files?: string[];
	}
}

export type GuildChannel = Extract<AnyChannel, { guild: Guild }>;
