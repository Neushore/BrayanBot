import { SetupSlashCommand } from "../../Utils/setupSlashCommand.js";
import { Message, ChatInputCommandInteraction } from "discord.js";
import { BrayanBot } from "../BrayanBot.js";

const SlashCommandData = {
    Name: String,
    Description: String,
}

const CommandConfig = {
    guildOnly: Boolean,
    dmOnly: Boolean,
    requiredPermissions: {
        user: [String],
        bot: [String]
    }
}

const CommandData = {
    Enabled: Boolean,
    Name: String,
    Usage: String,
    Cooldown: Number,
    Permission: [String],
    Description: String,
    DeleteCommand: Boolean,
    SlashCommand: {
        Enabled: Boolean,
        Data: SetupSlashCommand
    }
}

const CommandInterface = {
    /** @type {CommandData} */
    commandData: CommandData,
    /** @type {CommandConfig} */
    commandConfig: CommandConfig,
    /** 
     * @param {BrayanBot} manager @param {Message} message @param {String[]} args 
     * @param {String} prefixUsed @param {String} commandData */
    LegacyRun: (manager, message, args, prefixUsed, commandData) => { },
    /**
     * @param {BrayanBot} manager @param {ChatInputCommandInteraction} interaction 
     * @param {CommandData} commandData */
    InteractionRun: (manager, interaction, commandData) => { }
}

export { CommandData, CommandInterface, SlashCommandData, CommandConfig }