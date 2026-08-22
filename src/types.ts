export interface Category {
  id: string; // e.g. 'cat-1'
  catNumber: number; // 1 to 24
  title: string; // e.g. '01. Basic Inputs'
  koreanTitle: string; // e.g. '기본 입력 컨트롤'
  description: string;
  count: number;
  iconName: string;
}

export type DemoWidgetType =
  | 'text_input'
  | 'textarea'
  | 'number_stepper'
  | 'password'
  | 'search'
  | 'checkbox_radio'
  | 'toggle_switch'
  | 'select_dropdown'
  | 'combobox_autocomplete'
  | 'slider_range'
  | 'picker'
  | 'file_upload'
  | 'button_types'
  | 'button_group'
  | 'fab_action'
  | 'split_button'
  | 'undo_redo'
  | 'navbar_menu'
  | 'tabs_navigation'
  | 'breadcrumb_stepper'
  | 'command_palette'
  | 'mega_menu'
  | 'resizable_pane'
  | 'split_layout'
  | 'grid_layout'
  | 'sticky_scroll'
  | 'virtual_scroll'
  | 'scroll_snap'
  | 'table_basic'
  | 'data_grid_editable'
  | 'tree_view'
  | 'tree_grid'
  | 'column_resize_reorder'
  | 'accordion_disclosure'
  | 'modal_dialog'
  | 'popover_tooltip'
  | 'sheet_bottom_side'
  | 'feedback_toast_snackbar'
  | 'progress_spinner_skeleton'
  | 'state_matrix'
  | 'drag_drop_list'
  | 'direct_manipulation'
  | 'timeline_scrubber'
  | 'gantt_chart'
  | 'canvas_nodes'
  | 'form_validation'
  | 'keyboard_shortcuts'
  | 'theme_switcher'
  | 'design_token'
  | 'responsive_breakpoint'
  | 'app_shell_layout'
  | 'spreadsheet_grid'
  | 'text_editor_code'
  | 'pointer_cursor_lab'
  | 'shortcut_tester'
  | 'icon_gallery'
  | 'placeholder_hint'
  | 'overlay_transparency'
  | 'window_menu_bar'
  | 'mouse_pointer_events'
  | 'icons_symbols_palette'
  | 'text_hints_microcopy'
  | 'zindex_overlay_stack'
  | 'generic_interactive';

export interface TermItem {
  id: string; // e.g. 'term-1'
  num: number; // 1 to 636
  term: string; // English term e.g. 'Text Field'
  koreanName: string; // Korean name e.g. '텍스트 입력창'
  category: string; // cat-1 ... cat-24
  catNumber: number;
  definition: string;
  whenToUse: string;
  difference: string;
  visualPoint: string;
  aiPrompt: string;
  demoType: DemoWidgetType;
  tags?: string[];
  schematicType?: string;
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: string | null; // null for all
  onlyBookmarked: boolean;
  viewMode: 'grid' | 'compact' | 'expanded' | 'lab';
  selectedTag?: string | null;
}
