/// <reference types="node" />
import { Stream } from 'stream';
import { WebAPICallOptions, WebAPIResultCallback, WebAPICallResult } from './WebClient';
/**
 * Generic method definition
 */
export default interface Method<MethodArguments extends WebAPICallOptions> {
    (options?: MethodArguments & AuxiliaryArguments): Promise<WebAPICallResult>;
    (options: MethodArguments & AuxiliaryArguments, callback: WebAPIResultCallback): void;
}
export interface AuxiliaryArguments {
    [unknownArg: string]: any;
}
export interface TokenOverridable {
    token?: string;
}
export interface LocaleAware {
    include_locale?: boolean;
}
export interface Searchable {
    query: string;
    highlight?: boolean;
    sort: 'score' | 'timestamp';
    sort_dir: 'asc' | 'desc';
}
export interface UserPerspectiveEnabled {
    on_behalf_of?: string;
}
export interface CursorPaginationEnabled {
    limit?: number;
    cursor?: string;
}
export declare const cursorPaginationOptionKeys: Set<string>;
export declare const cursorPaginationEnabledMethods: Map<string, string>;
export interface TimelinePaginationEnabled {
    oldest?: string;
    latest?: string;
    inclusive?: boolean;
}
export declare const timelinePaginationOptionKeys: Set<string>;
export declare const timelinePaginationEnabledMethods: Set<any>;
export interface TraditionalPagingEnabled {
    page?: number;
    count?: number;
}
export declare const traditionalPagingOptionKeys: Set<string>;
export declare const traditionalPagingEnabledMethods: Set<any>;
export interface Dialog {
    title: string;
    callback_id: string;
    elements: {
        type: 'text' | 'textarea' | 'select';
        name: string;
        label: string;
        optional?: boolean;
        placeholder?: string;
        value?: string;
        max_length?: number;
        min_length?: number;
        hint?: string;
        subtype?: 'email' | 'number' | 'tel' | 'url';
        data_source?: 'users' | 'channels' | 'conversations' | 'external';
        selected_options?: SelectOption[];
        options?: SelectOption[];
        option_groups?: {
            label: string;
            options: SelectOption[];
        }[];
        min_query_length?: number;
    }[];
    submit_label?: string;
    notify_on_cancel?: boolean;
    state?: string;
}
export interface MessageAttachment {
    fallback?: string;
    color?: 'good' | 'warning' | 'danger' | string;
    pretext?: string;
    author_name?: string;
    author_link?: string;
    author_icon?: string;
    title?: string;
    title_link?: string;
    text?: string;
    fields?: {
        title: string;
        value: string;
        short?: boolean;
    }[];
    image_url?: string;
    thumb_url?: string;
    footer?: string;
    footer_icon?: string;
    ts?: string;
    actions?: AttachmentAction[];
    callback_id?: string;
    mrkdwn_in?: ('pretext' | 'text' | 'fields')[];
}
export interface AttachmentAction {
    id?: string;
    confirm?: Confirmation;
    data_source?: string;
    min_query_length?: number;
    name?: string;
    options?: OptionField[];
    option_groups?: {
        text: string;
        options: OptionField[];
    }[];
    selected_options?: OptionField[];
    style?: string;
    text: string;
    type: string;
    value?: string;
    url?: string;
}
export interface Prefs {
    user_colors?: string;
    color_names_in_list?: boolean;
    keyboard?: null;
    email_alerts?: string;
    email_alerts_sleep_until?: number;
    email_misc?: boolean;
    email_tips?: boolean;
    email_weekly?: boolean;
    email_offers?: boolean;
    email_research?: boolean;
    email_developer?: boolean;
    welcome_message_hidden?: boolean;
    search_sort?: string;
    expand_inline_imgs?: boolean;
    expand_internal_inline_imgs?: boolean;
    expand_snippets?: boolean;
    posts_formatting_guide?: boolean;
    seen_welcome_2?: boolean;
    seen_ssb_prompt?: boolean;
    spaces_new_xp_banner_dismissed?: boolean;
    search_only_my_channels?: boolean;
    search_only_current_team?: boolean;
    emoji_mode?: string;
    emoji_use?: string;
    has_invited?: boolean;
    has_uploaded?: boolean;
    has_created_channel?: boolean;
    has_searched?: boolean;
    search_exclude_channels?: string;
    messages_theme?: string;
    webapp_spellcheck?: boolean;
    no_joined_overlays?: boolean;
    no_created_overlays?: boolean;
    dropbox_enabled?: boolean;
    seen_domain_invite_reminder?: boolean;
    seen_member_invite_reminder?: boolean;
    mute_sounds?: boolean;
    arrow_history?: boolean;
    tab_ui_return_selects?: boolean;
    obey_inline_img_limit?: boolean;
    require_at?: boolean;
    ssb_space_window?: string;
    mac_ssb_bounce?: string;
    mac_ssb_bullet?: boolean;
    expand_non_media_attachments?: boolean;
    show_typing?: boolean;
    pagekeys_handled?: boolean;
    last_snippet_type?: string;
    display_real_names_override?: number;
    display_display_names?: boolean;
    time24?: boolean;
    enter_is_special_in_tbt?: boolean;
    msg_input_send_btn?: boolean;
    msg_input_send_btn_auto_set?: boolean;
    graphic_emoticons?: boolean;
    convert_emoticons?: boolean;
    ss_emojis?: boolean;
    seen_onboarding_start?: boolean;
    onboarding_cancelled?: boolean;
    seen_onboarding_slackbot_conversation?: boolean;
    seen_onboarding_channels?: boolean;
    seen_onboarding_direct_messages?: boolean;
    seen_onboarding_invites?: boolean;
    seen_onboarding_search?: boolean;
    seen_onboarding_recent_mentions?: boolean;
    seen_onboarding_starred_items?: boolean;
    seen_onboarding_private_groups?: boolean;
    seen_onboarding_banner?: boolean;
    onboarding_slackbot_conversation_step?: number;
    dnd_enabled?: boolean;
    dnd_start_hour?: string;
    dnd_end_hour?: string;
    dnd_custom_new_badge_seen?: boolean;
    sidebar_behavior?: string;
    channel_sort?: string;
    separate_private_channels?: boolean;
    separate_shared_channels?: boolean;
    sidebar_theme?: string;
    sidebar_theme_custom_values?: string;
    no_invites_widget_in_sidebar?: boolean;
    no_omnibox_in_channels?: boolean;
    k_key_omnibox_auto_hide_count?: number;
    show_sidebar_quickswitcher_button?: boolean;
    ent_org_wide_channels_sidebar?: boolean;
    mark_msgs_read_immediately?: boolean;
    start_scroll_at_oldest?: boolean;
    snippet_editor_wrap_long_lines?: boolean;
    ls_disabled?: boolean;
    f_key_search?: boolean;
    k_key_omnibox?: boolean;
    prompted_for_email_disabling?: boolean;
    full_text_extracts?: boolean;
    no_macelectron_banner?: boolean;
    no_macssb1_banner?: boolean;
    no_macssb2_banner?: boolean;
    no_winssb1_banner?: boolean;
    hide_user_group_info_pane?: boolean;
    mentions_exclude_at_user_groups?: boolean;
    privacy_policy_seen?: boolean;
    enterprise_migration_seen?: boolean;
    last_tos_acknowledged?: string;
    search_exclude_bots?: boolean;
    load_lato_2?: boolean;
    fuller_timestamps?: boolean;
    last_seen_at_channel_warning?: number;
    emoji_autocomplete_big?: boolean;
    winssb_run_from_tray?: boolean;
    winssb_window_flash_behavior?: string;
    two_factor_auth_enabled?: boolean;
    two_factor_type?: null;
    two_factor_backup_type?: null;
    hide_hex_swatch?: boolean;
    show_jumper_scores?: boolean;
    enterprise_mdm_custom_msg?: string;
    enterprise_excluded_app_teams?: null;
    client_logs_pri?: string;
    enhanced_debugging?: boolean;
    flannel_server_pool?: string;
    mentions_exclude_at_channels?: boolean;
    confirm_clear_all_unreads?: boolean;
    confirm_user_marked_away?: boolean;
    box_enabled?: boolean;
    seen_single_emoji_msg?: boolean;
    confirm_sh_call_start?: boolean;
    preferred_skin_tone?: string;
    show_all_skin_tones?: boolean;
    whats_new_read?: number;
    frecency_jumper?: string;
    frecency_ent_jumper?: string;
    frecency_ent_jumper_backup?: string;
    jumbomoji?: boolean;
    newxp_seen_last_message?: number;
    show_memory_instrument?: boolean;
    enable_unread_view?: boolean;
    seen_unread_view_coachmark?: boolean;
    enable_react_emoji_picker?: boolean;
    seen_custom_status_badge?: boolean;
    seen_custom_status_callout?: boolean;
    seen_custom_status_expiration_badge?: boolean;
    used_custom_status_kb_shortcut?: boolean;
    seen_guest_admin_slackbot_announcement?: boolean;
    seen_threads_notification_banner?: boolean;
    seen_name_tagging_coachmark?: boolean;
    all_unreads_sort_order?: string;
    locale?: string;
    seen_intl_channel_names_coachmark?: boolean;
    seen_locale_change_message?: number;
    seen_japanese_locale_change_message?: boolean;
    seen_shared_channels_coachmark?: boolean;
    seen_shared_channels_opt_in_change_message?: boolean;
    has_recently_shared_a_channel?: boolean;
    seen_channel_browser_admin_coachmark?: boolean;
    seen_administration_menu?: boolean;
    seen_emoji_update_overlay_coachmark?: boolean;
    allow_calls_to_set_current_status?: boolean;
    in_interactive_mas_migration_flow?: boolean;
    shdep_promo_code_submitted?: boolean;
    seen_shdep_slackbot_message?: boolean;
    seen_calls_interactive_coachmark?: boolean;
    allow_cmd_tab_iss?: boolean;
    seen_gdrive_coachmark?: boolean;
    overloaded_message_enabled?: boolean;
    seen_highlights_coachmark?: boolean;
    seen_highlights_arrows_coachmark?: boolean;
    seen_highlights_warm_welcome?: boolean;
    seen_new_search_ui?: boolean;
    a11y_font_size?: string;
    a11y_animations?: boolean;
    seen_keyboard_shortcuts_coachmark?: boolean;
    lessons_enabled?: boolean;
    tractor_enabled?: boolean;
    highlight_words?: string;
    threads_everything?: boolean;
    no_text_in_notifications?: boolean;
    push_show_preview?: boolean;
    growls_enabled?: boolean;
    all_channels_loud?: boolean;
    push_dm_alert?: boolean;
    push_mention_alert?: boolean;
    push_everything?: boolean;
    push_idle_wait?: number;
    push_sound?: string;
    new_msg_snd?: string;
    push_loud_channels?: string;
    push_mention_channels?: string;
    push_loud_channels_set?: string;
    loud_channels?: string;
    never_channels?: string;
    loud_channels_set?: string;
    at_channel_suppressed_channels?: string;
    push_at_channel_suppressed_channels?: string;
    muted_channels?: string;
    all_notifications_prefs?: string;
    growth_msg_limit_approaching_cta_count?: number;
    growth_msg_limit_approaching_cta_ts?: number;
    growth_msg_limit_reached_cta_count?: number;
    growth_msg_limit_reached_cta_last_ts?: number;
    growth_msg_limit_long_reached_cta_count?: number;
    growth_msg_limit_long_reached_cta_last_ts?: number;
    growth_msg_limit_sixty_day_banner_cta_count?: number;
    growth_msg_limit_sixty_day_banner_cta_last_ts?: number;
    growth_all_banners_prefs?: string;
    intro_to_apps_message_seen?: boolean;
    analytics_upsell_coachmark_seen?: boolean;
    seen_app_space_coachmark?: boolean;
    seen_app_space_tutorial?: boolean;
    purchaser?: boolean;
    show_ent_onboarding?: boolean;
    folders_enabled?: boolean;
    folder_data?: string;
    seen_corporate_export_alert?: boolean;
    show_autocomplete_help?: number;
    deprecation_toast_last_seen?: number;
    deprecation_modal_last_seen?: number;
    tz?: string;
}
export interface OptionField {
    description?: string;
    text: string;
    value: string;
}
export interface Confirmation {
    dismiss_text?: string;
    ok_text?: string;
    text: string;
    title?: string;
}
export interface LinkUnfurls {
    [linkUrl: string]: MessageAttachment;
}
export interface SelectOption {
    label: string;
    value: string;
}
export declare type APITestArguments = {};
export declare type AppsPermissionsInfoArguments = TokenOverridable & {};
export declare type AppsPermissionsRequestArguments = TokenOverridable & {
    scopes: string;
    trigger_id: string;
};
export declare type AppsPermissionsResourcesListArguments = TokenOverridable & CursorPaginationEnabled;
export declare type AppsPermissionsScopesListArguments = TokenOverridable & {};
export declare type AuthRevokeArguments = TokenOverridable & {
    test: boolean;
};
export declare type AuthTestArguments = TokenOverridable & {};
export declare type BotsInfoArguments = TokenOverridable & {
    bot?: string;
};
export declare type ChannelsArchiveArguments = TokenOverridable & {
    channel: string;
};
export declare type ChannelsCreateArguments = TokenOverridable & {
    name: string;
    validate?: boolean;
};
export declare type ChannelsHistoryArguments = TokenOverridable & TimelinePaginationEnabled & {
    channel: string;
    count?: number;
    unreads?: boolean;
};
export declare type ChannelsInfoArguments = TokenOverridable & LocaleAware & {
    channel: string;
};
export declare type ChannelsInviteArguments = TokenOverridable & {
    channel: string;
    user: string;
};
export declare type ChannelsJoinArguments = TokenOverridable & {
    name: string;
    validate?: boolean;
};
export declare type ChannelsKickArguments = TokenOverridable & {
    channel: string;
    user: string;
};
export declare type ChannelsLeaveArguments = TokenOverridable & {
    channel: string;
};
export declare type ChannelsListArguments = TokenOverridable & CursorPaginationEnabled & {
    exclude_archived: boolean;
    exclude_members: boolean;
};
export declare type ChannelsMarkArguments = TokenOverridable & {
    channel: string;
    ts: string;
};
export declare type ChannelsRenameArguments = TokenOverridable & {
    channel: string;
    name: string;
    validate?: boolean;
};
export declare type ChannelsRepliesArguments = TokenOverridable & {
    channel: string;
    thread_ts: string;
};
export declare type ChannelsSetPurposeArguments = TokenOverridable & {
    channel: string;
    purpose: string;
};
export declare type ChannelsSetTopicArguments = TokenOverridable & {
    channel: string;
    topic: string;
};
export declare type ChannelsUnarchiveArguments = TokenOverridable & {
    channel: string;
};
export declare type ChatDeleteArguments = TokenOverridable & {
    channel: string;
    ts: string;
    as_user?: boolean;
};
export declare type ChatGetPermalinkArguments = TokenOverridable & {
    channel: string;
    message_ts: string;
};
export declare type ChatMeMessageArguments = TokenOverridable & {
    channel: string;
    text: string;
};
export declare type ChatPostEphemeralArguments = TokenOverridable & {
    channel: string;
    text: string;
    user: string;
    as_user?: boolean;
    attachments?: MessageAttachment[];
    link_names?: boolean;
    parse?: 'full' | 'none';
};
export declare type ChatPostMessageArguments = TokenOverridable & {
    channel: string;
    text: string;
    as_user?: boolean;
    attachments?: MessageAttachment[];
    icon_emoji?: string;
    icon_url?: string;
    link_names?: boolean;
    mrkdwn?: boolean;
    parse?: 'full' | 'none';
    reply_broadcast?: boolean;
    thread_ts?: string;
    unfurl_links?: boolean;
    unfurl_media?: boolean;
    username?: string;
};
export declare type ChatUnfurlArguments = TokenOverridable & {
    channel: string;
    ts: string;
    unfurls: LinkUnfurls;
    user_auth_message?: string;
    user_auth_required?: boolean;
    user_auth_url?: string;
};
export declare type ChatUpdateArguments = TokenOverridable & {
    channel: string;
    text: string;
    ts: string;
    as_user?: boolean;
    attachments?: MessageAttachment[];
    link_names?: boolean;
    parse?: 'full' | 'none';
};
export declare type ConversationsArchiveArguments = TokenOverridable & {
    channel: string;
};
export declare type ConversationsCloseArguments = TokenOverridable & {
    channel: string;
};
export declare type ConversationsCreateArguments = TokenOverridable & {
    name: string;
    is_private?: boolean;
};
export declare type ConversationsHistoryArguments = TokenOverridable & CursorPaginationEnabled & TimelinePaginationEnabled & {
    channel: string;
};
export declare type ConversationsInfoArguments = TokenOverridable & LocaleAware & {
    channel: string;
};
export declare type ConversationsInviteArguments = TokenOverridable & {
    channel: string;
    users: string;
};
export declare type ConversationsJoinArguments = TokenOverridable & {
    channel: string;
};
export declare type ConversationsKickArguments = TokenOverridable & {
    channel: string;
    user: string;
};
export declare type ConversationsLeaveArguments = TokenOverridable & {
    channel: string;
};
export declare type ConversationsListArguments = TokenOverridable & CursorPaginationEnabled & {
    exclude_archived?: boolean;
    types?: string;
};
export declare type ConversationsMembersArguments = TokenOverridable & CursorPaginationEnabled & {
    channel: string;
};
export declare type ConversationsOpenArguments = TokenOverridable & {
    channel?: string;
    users?: string;
    return_im?: boolean;
};
export declare type ConversationsRenameArguments = TokenOverridable & {
    channel: string;
    name: string;
};
export declare type ConversationsRepliesArguments = TokenOverridable & CursorPaginationEnabled & TimelinePaginationEnabled & {
    channel: string;
    ts: string;
};
export declare type ConversationsSetPurposeArguments = TokenOverridable & {
    channel: string;
    purpose: string;
};
export declare type ConversationsSetTopicArguments = TokenOverridable & {
    channel: string;
    topic: string;
};
export declare type ConversationsUnarchiveArguments = TokenOverridable & {
    channel: string;
};
export declare type DialogOpenArguments = TokenOverridable & {
    trigger_id: string;
    dialog: Dialog;
};
export declare type DndEndDndArguments = TokenOverridable & UserPerspectiveEnabled;
export declare type DndEndSnoozeArguments = TokenOverridable & UserPerspectiveEnabled;
export declare type DndInfoArguments = TokenOverridable & {
    user: string;
};
export declare type DndSetSnoozeArguments = TokenOverridable & UserPerspectiveEnabled & {
    num_minutes: number;
};
export declare type DndTeamInfoArguments = TokenOverridable & {
    users?: string;
};
export declare type EmojiListArguments = TokenOverridable;
export declare type FilesDeleteArguments = TokenOverridable & {
    file: string;
};
export declare type FilesInfoArguments = TokenOverridable & CursorPaginationEnabled & {
    file: string;
    count?: number;
    page?: number;
};
export declare type FilesListArguments = TokenOverridable & TraditionalPagingEnabled & {
    channel?: string;
    user?: string;
    ts_from?: string;
    ts_to?: string;
    types?: string;
};
export declare type FilesRevokePublicURLArguments = TokenOverridable & {
    file: string;
};
export declare type FilesSharedPublicURLArguments = TokenOverridable & {
    file: string;
};
export declare type FilesUploadArguments = TokenOverridable & {
    channels?: string;
    content?: string;
    file?: Buffer | Stream;
    filename?: string;
    filetype?: string;
    initial_comment?: string;
    title?: string;
};
export declare type FilesCommentsAddArguments = TokenOverridable & {
    comment: string;
    file: string;
};
export declare type FilesCommentsDeleteArguments = TokenOverridable & {
    file: string;
    id: string;
};
export declare type FilesCommentsEditArguments = TokenOverridable & {
    comment: string;
    file: string;
    id: string;
};
export declare type GroupsArchiveArguments = TokenOverridable & {
    channel: string;
};
export declare type GroupsCreateArguments = TokenOverridable & {
    name: string;
    validate?: boolean;
};
export declare type GroupsCreateChildArguments = TokenOverridable & {
    channel: string;
};
export declare type GroupsHistoryArguments = TokenOverridable & TimelinePaginationEnabled & {
    channel: string;
    unreads?: boolean;
    count?: number;
};
export declare type GroupsInfoArguments = TokenOverridable & LocaleAware & {
    channel: string;
};
export declare type GroupsInviteArguments = TokenOverridable & {
    channel: string;
    user: string;
};
export declare type GroupsKickArguments = TokenOverridable & {
    channel: string;
    user: string;
};
export declare type GroupsLeaveArguments = TokenOverridable & {
    channel: string;
};
export declare type GroupsListArguments = TokenOverridable & CursorPaginationEnabled & {
    exclude_archived?: boolean;
    exclude_members?: boolean;
};
export declare type GroupsMarkArguments = TokenOverridable & {
    channel: string;
    ts: string;
};
export declare type GroupsOpenArguments = TokenOverridable & {
    channel: string;
};
export declare type GroupsRenameArguments = TokenOverridable & {
    channel: string;
    name: string;
    validate?: boolean;
};
export declare type GroupsRepliesArguments = TokenOverridable & {
    channel: string;
    thread_ts: boolean;
};
export declare type GroupsSetPurposeArguments = TokenOverridable & {
    channel: string;
    purpose: string;
};
export declare type GroupsSetTopicArguments = TokenOverridable & {
    channel: string;
    topic: string;
};
export declare type GroupsUnarchiveArguments = TokenOverridable & {
    channel: string;
};
export declare type IMCloseArguments = TokenOverridable & {
    channel: string;
};
export declare type IMHistoryArguments = TokenOverridable & TimelinePaginationEnabled & {
    channel: string;
    count?: number;
    unreads?: boolean;
};
export declare type IMListArguments = TokenOverridable & CursorPaginationEnabled;
export declare type IMMarkArguments = TokenOverridable & {
    channel: string;
    ts: string;
};
export declare type IMOpenArguments = TokenOverridable & LocaleAware & {
    user: string;
    return_im?: boolean;
};
export declare type IMRepliesArguments = TokenOverridable & {
    channel: string;
    thread_ts?: string;
};
export declare type MigrationExchangeArguments = TokenOverridable & {
    users: string;
    to_old?: boolean;
};
export declare type MPIMCloseArguments = TokenOverridable & {
    channel: string;
};
export declare type MPIMHistoryArguments = TokenOverridable & TimelinePaginationEnabled & {
    channel: string;
    count?: number;
    unreads?: boolean;
};
export declare type MPIMListArguments = TokenOverridable & CursorPaginationEnabled;
export declare type MPIMMarkArguments = TokenOverridable & {
    channel: string;
    ts: string;
};
export declare type MPIMOpenArguments = TokenOverridable & {
    users: string;
};
export declare type MPIMRepliesArguments = TokenOverridable & {
    channel: string;
    thread_ts: string;
};
export declare type OAuthAccessArguments = {
    client_id: string;
    client_secret: string;
    redirect_uri?: string;
    grant_type?: 'authorization_code' | 'refresh_token';
    code?: string;
    refresh_token?: string;
};
export declare type OAuthTokenArguments = {
    client_id: string;
    client_secret: string;
    code: string;
    redirect_uri?: string;
    single_channel?: '0' | '1';
};
export declare type PinsAddArguments = TokenOverridable & {
    channel: string;
    file?: string;
    file_comment?: string;
    timestamp?: string;
};
export declare type PinsListArguments = TokenOverridable & {
    channel: string;
};
export declare type PinsRemoveArguments = TokenOverridable & {
    channel: string;
    file?: string;
    file_comment?: string;
    timestamp?: string;
};
export declare type ReactionsAddArguments = TokenOverridable & {
    name: string;
    channel?: string;
    timestamp?: string;
    file?: string;
    file_comment?: string;
};
export declare type ReactionsGetArguments = TokenOverridable & {
    full?: boolean;
    channel?: string;
    timestamp?: string;
    file?: string;
    file_comment?: string;
};
export declare type ReactionsListArguments = TokenOverridable & TraditionalPagingEnabled & CursorPaginationEnabled & {
    user?: string;
    full?: boolean;
};
export declare type ReactionsRemoveArguments = TokenOverridable & {
    name: string;
    channel?: string;
    timestamp?: string;
    file?: string;
    file_comment?: string;
};
export declare type RemindersAddArguments = TokenOverridable & UserPerspectiveEnabled & {
    text: string;
    time: string | number;
    user?: string;
};
export declare type RemindersCompleteArguments = TokenOverridable & UserPerspectiveEnabled & {
    reminder: string;
};
export declare type RemindersDeleteArguments = TokenOverridable & UserPerspectiveEnabled & {
    reminder: string;
};
export declare type RemindersInfoArguments = TokenOverridable & UserPerspectiveEnabled & {
    reminder: string;
};
export declare type RemindersListArguments = TokenOverridable & UserPerspectiveEnabled;
export declare type RTMConnectArguments = TokenOverridable & {
    batch_presence_aware?: boolean;
    presence_sub?: boolean;
};
export declare type RTMStartArguments = TokenOverridable & LocaleAware & {
    batch_presence_aware?: boolean;
    mpim_aware?: boolean;
    no_latest?: '0' | '1';
    no_unreads?: string;
    presence_sub?: boolean;
    simple_latest?: boolean;
};
export declare type SearchAllArguments = TokenOverridable & TraditionalPagingEnabled & Searchable;
export declare type SearchFilesArguments = TokenOverridable & TraditionalPagingEnabled & Searchable;
export declare type SearchMessagesArguments = TokenOverridable & TraditionalPagingEnabled & Searchable;
export declare type StarsAddArguments = TokenOverridable & {
    channel?: string;
    timestamp?: string;
    file?: string;
    file_comment?: string;
};
export declare type StarsListArguments = TokenOverridable & TraditionalPagingEnabled & CursorPaginationEnabled;
export declare type StarsRemoveArguments = TokenOverridable & {
    channel?: string;
    timestamp?: string;
    file?: string;
    file_comment?: string;
};
export declare type TeamAccessLogsArguments = TokenOverridable & {
    before?: number;
    count?: number;
    page?: number;
};
export declare type TeamBillableInfoArguments = TokenOverridable & {
    user?: string;
};
export declare type TeamInfoArguments = TokenOverridable;
export declare type TeamIntegrationLogsArguments = TokenOverridable & {
    app_id?: string;
    change_type?: string;
    count?: number;
    page?: number;
    service_id?: string;
    user?: string;
};
export declare type TeamProfileGetArguments = TokenOverridable & {
    visibility?: 'all' | 'visible' | 'hidden';
};
export declare type UsergroupsCreateArguments = TokenOverridable & {
    name: string;
    channels?: string;
    description?: string;
    handle?: string;
    include_count?: boolean;
};
export declare type UsergroupsDisableArguments = TokenOverridable & {
    usergroup: string;
    include_count?: boolean;
};
export declare type UsergroupsEnableArguments = TokenOverridable & {
    usergroup: string;
    include_count?: boolean;
};
export declare type UsergroupsListArguments = TokenOverridable & {
    include_count?: boolean;
    include_disabled?: boolean;
    include_users?: boolean;
};
export declare type UsergroupsUpdateArguments = TokenOverridable & {
    usergroup: string;
    channels?: string;
    description?: string;
    handle?: string;
    include_count?: boolean;
    name?: string;
};
export declare type UsergroupsUsersListArguments = TokenOverridable & {
    usergroup: string;
    include_disabled?: boolean;
};
export declare type UsergroupsUsersUpdateArguments = TokenOverridable & {
    usergroup: string;
    users: string;
    include_count?: boolean;
};
export declare type UsersConversationsArguments = TokenOverridable & CursorPaginationEnabled & {
    exclude_archived?: boolean;
    types?: string;
    user?: string;
};
export declare type UsersDeletePhotoArguments = TokenOverridable;
export declare type UsersGetPresenceArguments = TokenOverridable & {
    user: string;
};
export declare type UsersIdentityArguments = TokenOverridable & UserPerspectiveEnabled;
export declare type UsersInfoArguments = TokenOverridable & LocaleAware & {
    user: string;
};
export declare type UsersListArguments = TokenOverridable & CursorPaginationEnabled & LocaleAware & {
    presence?: boolean;
};
export declare type UsersLookupByEmailArguments = TokenOverridable & {
    email: string;
};
export declare type UsersSetActiveArguments = TokenOverridable;
export declare type UsersSetPhotoArguments = TokenOverridable & {
    image: Buffer | Stream;
    crop_w?: number;
    crop_x?: number;
    crop_y?: number;
};
export declare type UsersSetPresenceArguments = TokenOverridable & {
    presence: 'auto' | 'away';
};
export declare type UsersProfileGetArguments = TokenOverridable & {
    include_labels?: boolean;
    user?: string;
};
export declare type UsersProfileSetArguments = TokenOverridable & UserPerspectiveEnabled & {
    profile?: string;
    user?: string;
    name?: string;
    value?: string;
};
export declare type UsersPrefsGetArguments = TokenOverridable & {
    user?: string;
};
export declare type UsersPrefsSetArguments = TokenOverridable & {
    prefs: Prefs;
};
