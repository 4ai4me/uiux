import React, { useState, useEffect, useRef } from 'react';
import { TermItem } from '../types';
import {
  LiveNavbarLab,
  LiveMenuBarLab,
  LiveSidebarLab,
  LiveSideNavLab,
  LiveDrawerLab,
  LiveHamburgerLab,
  LiveDropdownMenuLab,
  LiveContextMenuLab,
  LiveOverflowMenuLab,
  LiveTabsLab,
  LiveVerticalTabsLab,
  LiveBreadcrumbLab,
  LivePaginationLab,
  LiveStepperLab,
  LiveWizardLab,
  LiveAnchorNavLab,
  LiveBottomNavLab,
  LiveNavRailLab,
  LiveMegaMenuLab,
  LiveCommandPaletteLab,
  LiveDocumentTabBarLab,
  LiveOmnibarBreadcrumbSearchLab,
} from './LiveNavLabs';
import {
  LiveAccordionLab,
  LiveCollapsiblePanelLab,
  LiveExpandablePanelLab,
  LiveDisclosureLab,
  LiveChevronLab,
  LiveCaretLab,
  LiveTreeNodeLab,
  LiveParentNodeLab,
  LiveChildNodeLab,
  LiveLeafNodeLab,
  LiveIndentationLab,
  LiveHierarchyLineLab,
  LiveExpanderLab,
  LiveCollapseAllLab,
  LiveExpandAllLab,
  LiveDrillDownLab,
  LiveDrillUpLab,
  LiveNestedListLab,
  LiveOutlineViewLab,
  LiveHierarchyBreadcrumbLab,
} from './LiveDisclosureLabs';
import {
  LiveModalLab,
  LiveDialogLab,
  LiveAlertDialogLab,
  LiveConfirmDialogLab,
  LivePopoverLab,
  LivePopupLab,
  LiveTooltipLab,
  LiveContextualPopoverLab,
  LiveDrawerOverlayLab,
  LiveBackdropLab,
  LiveScrimLab,
  LiveLightboxLab,
  LiveSheetLab,
  LiveBottomSheetLab,
  LiveSideSheetLab,
  LiveAnchoredPopupLab,
  LiveNonModalDialogLab,
  LiveFullscreenModalLab,
  LiveInlineDialogLab,
  LiveCoachmarkLab,
} from './LiveDialogLabs';
import {
  LiveAlertBannerLab,
  LiveToastLab,
  LiveSnackbarLab,
  LiveNotificationCenterLab,
  LiveBadgeLab,
  LiveStatusIndicatorLab,
  LiveStatusDotLab,
  LiveProgressBarLab,
  LiveProgressRingLab,
  LiveSpinnerLab,
  LiveSkeletonLab,
  LiveEmptyStateLab,
  LiveErrorStateLab,
  LiveSuccessStateLab,
  LiveWarningStateLab,
  LiveInfoStateLab,
  LiveCalloutLab,
  LiveInlineValidationLab,
  LiveErrorMessageLab,
  LiveSuccessMessageLab,
} from './LiveFeedbackLabs';
import {
  LiveDefaultStateLab,
  LiveHoverStateLab,
  LiveFocusStateLab,
  LiveActivePressedStateLab,
  LiveSelectedStateLab,
  LiveDisabledStateLab,
  LiveReadonlyStateLab,
  LiveCheckedStateLab,
  LiveUncheckedStateLab,
  LiveIndeterminateStateLab,
  LiveExpandedStateLab,
  LiveCollapsedStateLab,
  LiveLoadingStateLab,
  LiveErrorStateLab as LiveStateErrorLab,
  LiveWarningStateLab as LiveStateWarningLab,
  LiveSuccessStateLab as LiveStateSuccessLab,
  LivePressedStateLab,
  LiveDraggedStateLab,
  LiveDropTargetStateLab,
  LiveFocusVisibleStateLab,
} from './LiveStateLabs';
import {
  LiveDragAndDropLab,
  LiveDraggableLab,
  LiveDroppableLab,
  LiveDropZoneLab,
  LiveDragHandleLab,
  LiveGrabHandleLab,
  LiveGripLab,
  LiveDropIndicatorLab,
  LiveDragPreviewLab,
  LiveGhostElementLab,
  LivePlaceholderDnDLab,
  LiveSnapLab,
  LiveSnapPointLab,
  LiveSnapGridLab,
  LiveMagneticSnapLab,
  LiveFreeDragLab,
  LiveDirectResizeLab,
  LiveDirectMoveLab,
  LivePanLab,
  LiveRubberBandLab,
} from './LiveDnDLabs';
import {
  LiveTimelineLab,
  LiveGanttChartLab,
  LiveTimeAxisLab,
  LiveTimeScaleLab,
  LiveTimelineHeaderLab,
  LiveTimelineRowLab,
  LiveTimelineBarLab,
  LivePlayheadLab,
  LiveTimeCursorLab,
  LiveMarkerLab,
  LiveMilestoneLab,
  LiveGuideLineLab,
  LiveGridLineLab,
  LiveMajorTickLab,
  LiveMinorTickLab,
  LiveZoomControlLab,
  LiveZoomToFitLab,
  LiveRangeSelectionLab,
  LiveBrushLab,
  LiveMiniMapLab,
} from './LiveTimelineLabs';
import {
  LiveCanvasLab,
  LiveWorkspaceLab,
  LiveNodeLab,
  LiveEdgeLab,
  LiveConnectorLab,
  LivePortLab,
  LiveAnchorPointLab,
  LiveControlPointLab,
  LiveTransformHandleLab,
  LiveBoundingBoxLab,
  LiveSelectionBoxLab,
  LiveMarqueeSelectionLab,
  LiveLassoSelectionLab,
  LiveGridLab,
  LiveRulerLab,
  LiveGuideLab,
  LiveSmartGuideLab,
  LiveAlignmentLab,
  LiveDistributionLab,
  LiveAutoLayoutLab,
} from './LiveCanvasLabs';
import {
  LiveFormLab,
  LiveFormGroupLab,
  LiveFieldsetLab,
  LiveLegendLab,
  LiveLabelLab,
  LiveHelperTextLab,
  LivePlaceholderLab,
  LiveRequiredFieldLab,
  LiveOptionalFieldLab,
  LiveValidationLab,
  LiveClientSideValidationLab,
  LiveServerSideValidationLab,
  LiveInlineErrorLab,
  LiveInputMaskLab,
  LiveCharacterCounterLab,
  LiveClearButtonLab,
  LiveResetFormLab,
  LiveDirtyStateLab,
  LiveAutosaveLab,
  LiveDraftStateLab,
  LiveDraggableInlineEditRowLab,
  LiveSearchBarAdvancedFilterLab,
} from './LiveFormLabs';
import {
  LiveFocusRingLab,
  LiveKeyboardNavLab,
  LiveTabOrderLab,
  LiveSkipLinkLab,
  LiveAriaLabelLab,
  LiveScreenReaderTextLab,
  LiveHighContrastLab,
  LiveDarkModeLab,
  LiveLightModeLab,
  LiveThemeLab,
  LiveDesignTokenLab,
  LiveComponentLab,
  LiveVariantLab,
  LiveStateMachineLab,
  LiveBreakpointLab,
  LiveLazyLoadingLab,
  LiveVirtualizationLab,
  LiveOptimisticUILab,
  LiveUndoStackLab,
  LiveCommandBarLab,
} from './LiveSystemLabs';
import {
  LiveAppShellLab,
  LiveAppFrameLab,
  LiveMasterDetailLab,
  LiveTwoPaneLab,
  LiveThreePaneLab,
  LiveSplitViewLab,
  LiveNestedSplitLab,
  LiveDockablePanelLab,
  LiveDockingLayoutLab,
  LiveCollapsibleSidebarLab,
  LiveResizableSidebarLab,
  LiveInspectorPanelLab,
  LivePropertiesPanelLab,
  LiveUtilityPanelLab,
  LiveWorkspaceRegionLab,
  LiveContentRegionLab,
  LiveHeaderRegionLab,
  LiveFooterRegionLab,
  LiveStatusBarLab,
  LiveToolbarRegionLab,
  LiveContextToolbarLab,
  LivePanelStackLab,
  LivePanelGroupLab,
  LiveRespSplitLab,
  LiveMinMaxConstraintLab,
  LiveCollapseThresholdLab,
  LiveStickyWorkspaceHeaderLab,
  LiveIndepScrollLab,
  LiveSyncScrollLab,
  LiveScrollBoundaryLab,
} from './LiveLayoutFrameLabs';
import {
  LiveEditableDataGridLab,
  LiveSpreadsheetGridLab,
  LiveCellEditorLab,
  LiveCellRendererLab,
  LiveRowSelectionLab,
  LiveCellRangeSelectionLab,
  LiveMultiRowSelectionLab,
  LivePinnedColumnLab,
  LivePinnedRowLab,
  LiveStickyTableHeaderLab,
  LiveMultiLevelHeaderLab,
  LiveGroupedColumnLab,
  LiveColumnVisibilityLab,
  LiveColumnChooserLab,
  LiveColumnPinningLab,
  LiveColumnAutosizeLab,
  LiveFitColumnsToViewLab,
  LiveRowHeightAutoLab,
  LiveDenseTableLab,
  LiveComfortableTableLab,
  LiveZebraStripingLab,
  LiveHoverRowHighlightLab,
  LiveActiveCellLab,
  LiveDirtyCellLab,
  LiveValidationCellLab,
  LiveComputedColumnLab,
  LiveAggregateRowLab,
  LiveGroupRowLab,
  LiveRowDetailLab,
  LiveInlineRowActionsLab,
  LiveHeaderFilterToolboxLab,
  LivePivotMatrixTransformLab,
  LiveGridCellTransactionCommitLab,
  LiveCellNavigationDomSyncLab,
  LiveCascaderGridEditorLab,
  LiveBidirectionalFreezeMatrixLab,
} from './LiveDataGridLabs';
import {
  LiveSingleLineTextBoxLab,
  LiveMultiLineTextBoxLab,
  LiveAutoGrowingTextareaLab,
  LiveFixedHeightTextareaLab,
  LiveResizableTextareaLab,
  LiveInlineTextEditorLab,
  LiveContenteditableLab,
  LiveFloatingTextBoxLab,
  LiveAnchoredTextBoxLab,
  LiveViewportFixedTextBoxLab,
  LiveDraggableTextBoxLab,
  LiveResizableTextBoxLab,
  LiveEditableOverlayLabelLab,
  LiveTextBoxHandleLab,
  LiveTextOverflowLab,
  LiveTextWrappingLab,
  LiveNoWrapTextLab,
  LiveEllipsisLab,
  LiveExpandableTextLab,
  LiveReadOnlyTextFieldLab,
  LiveDisabledTextFieldLab,
  LivePrefixSuffixFieldLab,
  LiveUnitInputLab,
  LiveMaskedTextInputLab,
  LiveMonospaceTextFieldLab,
  LiveSearchableTextBoxLab,
  LiveDebouncedTextInputLab,
  LiveTextSelectionToolbarLab,
  LiveWysiwygEditorLab,
  LiveMarkdownEditorLab,
} from './LiveTextEditorLabs';
import {
  LiveWindowTitleBarLab,
  LiveWindowControlButtonsLab,
  LiveMenuBarLab as LiveDesktopMenuBarLab,
  LiveDropdownMenuItemLab,
  LiveMenuSeparatorLab,
  LiveSubmenuLab,
  LiveCheckedMenuItemLab,
  LiveRadioMenuItemLab,
  LiveDisabledMenuItemLab,
  LiveModalWindowLab,
  LiveModelessDialogLab,
  LiveBackdropClickDismissLab,
  LiveFloatingPaletteLab,
  LiveWindowSnappingLab,
  LiveWindowMinimizeLab,
  LiveWindowMaximizeRestoreLab,
  LiveCascadeWindowsLab,
  LiveTileWindowsLab,
  LiveBringToFrontLab,
  LiveStickyNotesLab,
  LiveAlwaysOnTopPinLab,
  LiveDockablePanelLab as LiveWindowDockablePanelLab,
  LiveWindowResizeGripsLab,
  LiveWindowOpacitySliderLab,
  LiveSplitPaneDividerLab,
  LiveMagneticSnapZoneLab,
  LiveWindowRollUpLab,
  LiveFloatingActionRibbonLab,
  LiveWindowFocusDimmerLab,
  LiveMultiDocWorkspaceGridLab,
  LiveContextNestedFlyoutLab,
  LiveRadialPieMenuLab,
  LiveMenuMnemonicUnderlineLab,
  LiveRecentFilesMenuLab,
  LiveHamburgerDrawerMenuLab,
  LiveFloatingInspectorLab,
  LiveTaskbarThumbnailPeekLab,
  LiveSystemStatusBarLab,
  LiveSnapLayoutsSelectorLab,
  LiveCrashRecoveryBannerLab,
} from './LiveWindowMenuLabs';
import {
  LivePointerHoverLab,
  LivePointerActivePressLab,
  LiveDoubleClickActionLab,
  LiveRightClickContextMenuLab,
  LiveMiddleClickPanLab,
  LiveMouseWheelZoomLab,
  LiveCursorCrosshairLab,
  LiveCursorGrabLab,
  LiveCursorResizeLab,
  LivePointerCaptureLab,
  LivePointerLockFPSLab,
  LiveMomentumInertiaScrollLab,
  LiveElasticRubberBandingLab,
  LiveMagneticCursorSnapLab,
  LiveCustomCursorTrailLab,
  LiveStylusPressureTiltLab,
  LiveHoverScrubTimelineLab,
  LivePinchSpreadZoomLab,
  LiveMultiTouchRotationLab,
  LiveTouchLongPressHapticLab,
  LiveDirectCanvasPanLab,
  LiveSnapToGuideGridLab,
  LiveSmartDistributeGuidesLab,
  LiveThreeFingerSwipeLab,
  LiveTouchHitExpansionLab,
  LiveWheelShiftHorizontalLab,
  LiveCustomDragGhostLab,
  LiveRightClickOrbitCameraLab,
  LiveDoubleClickMaximizeLab,
  LiveTripleClickSelectLab,
  LiveDragAutoScrollLab,
  LiveClickRippleEffectLab,
  LiveBezierTangentHandleLab,
  LiveFreeformLassoSelectLab,
  LiveHoverTooltipDelayLab,
  LiveHoverCardRichFlyoutLab,
  LiveClickOutsideBackdropLab,
  LiveRightDragMeasurementLab,
  LiveDragReorderPlaceholderLab,
  LiveSpatialCompassMinimapLab,
} from './LiveMousePointerLabs';
import {
  LiveGlobalShortcutLab,
  LiveModifierKeysLab,
  LiveKeyChordLab,
  LiveArrowNudgeLab,
  LiveFocusTrapLab,
  LiveEscapeDismissLab,
  LiveShortcutCheatSheetLab,
  LiveKbdBadgeLab,
  LiveConflictResolutionLab,
  LiveTypeaheadLab,
  LiveAccessKeyLab,
  LiveShortcutCustomizerLab,
  LiveSpacebarPanLab,
  LiveDuplicateLab,
  LiveGroupUngroupLab,
  LiveSelectAllLab,
  LiveFindInPageLab,
  LiveCommandPaletteShortcutLab,
  LiveToggleSidebarLab,
  LiveSpecializedHotkeyLab,
} from './LiveKeyboardShortcutLabs';
import {
  LiveActionIconLab,
  LiveStatusIconLab,
  LiveKebabIconLab,
  LiveMeatballIconLab,
  LiveHamburgerIconLab,
  LiveGripDotsIconLab,
  LiveChevronVsArrowLab,
  LiveFileTypeIconLab,
  LiveBentoGridIconLab,
  LiveSortIndicatorLab,
  LivePasswordEyeLab,
  LiveCopyClipboardLab,
  LiveLockSecurityLab,
  LiveNotificationBellLab,
  LiveLoadingSpinnerLab,
  LiveFolderTreeIconsLab,
  LiveIconAriaLabelLab,
  LiveSpecializedIconLab,
} from './LiveIconSymbolLabs';
import {
  LiveGhostTextLab,
  LiveFloatingLabelLab,
  LiveExampleChipsLab,
  LiveMicrocopyLab,
  LivePasswordStrengthLab,
  LiveHelpTextLab,
  LiveTextHintInlineErrorLab,
  LiveCharCounterLab,
  LiveTextHintEmptyStateLab,
  LiveTextHintTooltipLab,
  LiveBadgeCountLab,
  LiveFormatMaskLab,
  LivePrefixSuffixLab,
  LiveTextHintBreadcrumbLab,
  LiveShortcutPillLab,
  LiveTextHintAutosaveLab,
  LiveRequiredAsteriskLab,
  LiveOptionalBadgeLab,
  LiveRangeLimitLab,
  LiveSlashCommandLab,
  LiveDropzoneLab,
  LiveDestructiveWarningLab,
  LiveSearchHighlightLab,
  LiveTextHintPaginationLab,
  LiveUndoToastLab,
  LiveVersionTagLab,
  LiveStepProgressLab,
  LiveTimeRemainingLab,
  LiveReadOnlyTagLab,
  LiveUnsavedDotLab,
  LiveConnectionStatusLab,
  LiveClearFiltersLab,
  LiveExpandCollapseLab,
  LiveSelectAllHintLab,
  LiveCopyToastLab,
  LiveDidYouMeanLab,
  LiveFilterChipRemoveLab,
  LiveNavTipPillLab,
  LiveOfflineBannerLab,
  LiveAriaLiveLab,
} from './LiveTextHintLabs';
import {
  LiveZIndexStackOrderLab,
  LiveDimmedBackdropLab,
  LiveGlassmorphismLab,
  LiveClickThroughLab,
  LiveReactPortalLab,
  LiveStackingContextLab,
  LiveBackdropBlurLab,
  LiveModalDismissLab,
  LiveScrimOverlayLab,
  LiveSkeletonOverlayLab,
  LiveStickyShadowLab,
  LiveToastStackLab,
  LiveDrawerSheetLab,
  LiveHoverCardLab,
  LiveCanvasGridLab,
  LiveMarqueeOverlayLab,
  LiveSmartGuidesLab,
  LiveWatermarkLab,
  LiveFullScreenLoadingLab,
  LiveOverlayLightboxLab,
  LiveOverlayContextMenuLab,
  LiveSpotlightSearchLab,
  LiveResizerGhostLab,
  LiveTourSpotlightLab,
  LivePulseGlowLab,
  LiveGlassBorderLab,
  LiveDropdownShieldLab,
  LiveTextFadeMaskLab,
  LiveHeatmapOverlayLab,
  LiveFABLab,
  LiveCurtainSwipeLab,
  LiveTargetSpotlightLab,
  LiveOverlayStickyTableHeaderLab,
  LiveCanvasRulerLab,
  LiveCursorCoordsLab,
  LiveMultiModalDepthLab,
  LiveGhostNodeLab,
  LiveFloatingToolbarLab,
  LiveGlassNavbarLab,
  LiveMinimapOverlayLab,
  LiveVignetteShadowLab,
  LiveLayerOpacityLab,
  LiveCollisionFlipLab,
  LiveHoverGlowLab,
  LiveZIndex3DVisualizerLab,
  LiveUniversalSystemLab,
} from './LiveOverlayTransparencyLabs';
import {
  LiveSplitFlapStatusBadgeLab,
  LiveTacticalReconHudLab,
  LiveSharedCorridorPanelStackLab,
  LiveCctvFrustumViewshedLab,
  LiveAltitudeAdaptiveScopeMaskLab,
  LiveIdleRenderGovernorMonitorLab,
} from './LiveGeospatialConsoleLabs';
import {
  LiveInteractiveBeadedCurtainLab,
  LiveVelocityAdaptiveChimeSynthesizerLab,
  LiveVerletStringDragDynamicsLab,
  LiveCulturalPatternGridMatrixLab,
  LivePhysicalParameterTunerDrawerLab,
  LiveCurtainRevealLayeringTransitionLab,
} from './LiveChimesPhysicsAudioLabs';
import { 
  Play, Pause, RotateCcw, Check, Copy, Sliders, ChevronDown, ChevronRight,
  Eye, EyeOff, Sparkles, Volume2, ShieldCheck, AlertTriangle, Info, Bell,
  Search, Trash2, Plus, Move, Layers, Grid, BarChart2, Hash, Command,
  Maximize2, Minimize2, ZoomIn, ZoomOut, CheckSquare, Square, Circle,
  FileCode, Terminal, HelpCircle, ArrowUpRight, Folder, FolderOpen, File,
  MousePointer, MousePointerClick, RefreshCw, Upload, CornerDownLeft,
  Calendar, Clock, Filter, MoreVertical, Edit, FileText, CheckCircle2, ChevronLeft,
  Download, LayoutGrid, Settings, Flame, CloudUpload, Undo2, Redo2, X
} from 'lucide-react';

interface Props {
  term: TermItem;
}

export const LiveDemoRenderer: React.FC<Props> = ({ term }) => {
  return (
    <div className="live-lab-viewport w-full bg-white dark:bg-slate-900/90 rounded-2xl border-2 border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-4 shadow-sm dark:shadow-inner select-none transition-colors duration-150">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
          <span className="text-sm font-mono font-black text-slate-900 dark:text-slate-100 tracking-wider">
            Live UX
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/40 font-bold">
            {term.schematicType || term.demoType}
          </span>
          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 font-bold">
            Cat {term.catNumber}
          </span>
        </div>
      </div>

      <div className="py-4 min-h-[170px] flex items-center justify-center text-slate-900 dark:text-slate-100 text-sm">
        {renderSpecializedDemo(term)}
      </div>

      <div className="pt-2.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
        <span className="truncate font-semibold">💡 {term.visualPoint}</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-bold ml-2 shrink-0">Click & interact with controls</span>
      </div>
    </div>
  );
};

/**
 * Highly granular, specialized interactive widgets dispatched based on
 * exact term properties, schematicType, and functional requirements.
 */
function renderSpecializedDemo(term: TermItem) {
  const sch = (term.schematicType || '').toLowerCase();
  const termName = term.term.toLowerCase();
  const cat = term.catNumber;

  // -------------------------------------------------------------
  // High-Priority Direct Term Dispatches
  // -------------------------------------------------------------
  if (term.num === 652 || sch === 'idle_render_governor_monitor') return <LiveIdleRenderGovernorMonitorLab />;
  if (term.num === 651 || sch === 'altitude_adaptive_scope_mask') return <LiveAltitudeAdaptiveScopeMaskLab />;
  if (term.num === 650 || sch === 'cctv_frustum_viewshed') return <LiveCctvFrustumViewshedLab />;
  if (term.num === 649 || sch === 'shared_corridor_panel_stack') return <LiveSharedCorridorPanelStackLab />;
  if (term.num === 648 || sch === 'tactical_recon_hud') return <LiveTacticalReconHudLab />;
  if (term.num === 647 || sch === 'split_flap_status_badge') return <LiveSplitFlapStatusBadgeLab />;
  if (term.num === 646 || sch === 'bidirectional_freeze_matrix') return <LiveBidirectionalFreezeMatrixLab />;
  if (term.num === 645 || sch === 'cascader_grid_editor') return <LiveCascaderGridEditorLab />;
  if (term.num === 644 || sch === 'cell_navigation_dom_sync') return <LiveCellNavigationDomSyncLab />;
  if (term.num === 643 || sch === 'grid_cell_transaction_commit') return <LiveGridCellTransactionCommitLab />;
  if (term.num === 642 || sch === 'pivot_matrix_transform') return <LivePivotMatrixTransformLab />;
  if (term.num === 641 || sch === 'header_filter_toolbox') return <LiveHeaderFilterToolboxLab />;
  if (term.num === 640 || sch === 'search_bar_advanced_filter_dropdown') return <LiveSearchBarAdvancedFilterLab />;
  if (term.num === 639 || sch === 'draggable_inline_edit_row') return <LiveDraggableInlineEditRowLab />;
  if (term.num === 638 || sch === 'omnibar_breadcrumb_search') return <LiveOmnibarBreadcrumbSearchLab />;
  if (term.num === 637 || sch === 'document_tab_bar') return <LiveDocumentTabBarLab />;
  if (term.num === 636) return <LiveUniversalSystemLab />;

  // -------------------------------------------------------------
  // Category 01: Basic Inputs (#001 ~ #020) High-Precision Labs
  // -------------------------------------------------------------
  if (term.num === 1 || sch === 'input_text' || termName === 'text field') return <LiveTextFieldDemo />;
  if (term.num === 2 || sch === 'textarea' || termName === 'textarea') return <LiveTextareaDemo />;
  if (term.num === 3 || sch === 'input_number' || termName === 'number input') return <LiveNumberStepperDemo />;
  if (term.num === 4 || sch === 'input_password' || termName.includes('password')) return <LivePasswordInputDemo />;
  if (term.num === 5 || sch === 'input_search' || termName === 'search field' || termName === 'search input') return <LiveSearchFieldDemo />;
  if (term.num === 6 || sch === 'checkbox' || termName === 'checkbox') return <LiveCheckboxDemo />;
  if (term.num === 7 || sch === 'radio' || termName === 'radio button') return <LiveRadioGroupDemo />;
  if (term.num === 8 || sch === 'toggle_switch' || termName.includes('toggle switch') || termName.includes('switch')) return <LiveToggleSwitchDemo />;
  
  // #009 vs #010 Differentiated: Form Select vs Action Dropdown Menu
  if (term.num === 9 || sch === 'select' || termName === 'select') return <LiveSelectInputDemo />;
  if (term.num === 10 || sch === 'dropdown' || termName === 'dropdown') return <LiveActionDropdownMenuDemo />;
  
  // #011 Combobox (Editable Typing + Filter Suggestions)
  if (term.num === 11 || sch === 'combobox' || termName === 'combobox') return <LiveComboboxInputDemo />;
  
  // #012 Autocomplete (Interactive Typing Search with Auto-Fill Suggestions)
  if (term.num === 12 || sch === 'autocomplete' || termName === 'autocomplete') return <LiveAutocompleteSearchDemo />;
  
  // #013 vs #014 Differentiated: Single Slider vs Dual Range Slider
  if (term.num === 13 || sch === 'slider' || termName === 'slider') return <LiveSingleSliderDemo />;
  if (term.num === 14 || sch === 'range_slider' || termName === 'range slider') return <LiveDualRangeSliderDemo />;
  
  // #015 Stepper Input (Chunky Touch Buttons [-] [+] with custom deltas)
  if (term.num === 15 || sch === 'stepper' || termName === 'stepper input') return <LiveStepperTouchDemo />;
  
  // #016, #017, #018 Differentiated: Calendar DatePicker vs TimePicker Dial vs Combined DateTimePicker
  if (term.num === 16 || sch === 'date_picker' || termName === 'date picker') return <LiveMiniCalendarDatePickerDemo />;
  if (term.num === 17 || sch === 'time_picker' || termName === 'time picker') return <LiveTimePickerDialDemo />;
  if (term.num === 18 || sch === 'datetime_picker' || termName === 'date-time picker') return <LiveCombinedDateTimePickerDemo />;
  
  // #019 Color Picker & #020 File Upload
  if (term.num === 19 || sch === 'color_picker' || termName === 'color picker') return <LivePickerDemo isColor={true} />;
  if (term.num === 20 || sch === 'file_upload' || termName === 'file upload') return <LiveFileUploadDemo />;

  // -------------------------------------------------------------
  // Specific Disambiguated Components in other categories
  // -------------------------------------------------------------
  if (term.num === 123 || sch === 'expandable_panel') return <LiveExpandablePanelDemo term={term} />;
  if (term.num === 124 || sch === 'disclosure') return <LiveDisclosureOnlyDemo term={term} />;

  // -------------------------------------------------------------
  // Category 02: Buttons & Actions (#021 ~ #040) Differentiated Labs
  // -------------------------------------------------------------
  if (term.num === 21) return <LiveDefaultButtonLab />;
  if (term.num === 22) return <LivePrimaryButtonLab />;
  if (term.num === 23) return <LiveSecondaryButtonLab />;
  if (term.num === 24) return <LiveTertiaryButtonLab />;
  if (term.num === 25) return <LiveGhostButtonLab />;
  if (term.num === 26) return <LiveTextButtonLab />;
  if (term.num === 27) return <LiveIconButtonLab />;
  if (term.num === 28) return <LiveToggleButtonLab />;
  if (term.num === 29) return <LiveButtonGroupLab />;
  if (term.num === 30) return <LiveSegmentedControlLab />;
  if (term.num === 31) return <LiveSplitButtonDemo />;
  if (term.num === 32) return <LiveSpeedDialFabLab />;
  if (term.num === 33) return <LiveContextualActionBarLab />;
  if (term.num === 34) return <LiveDestructiveButtonLab />;
  if (term.num === 35) return <LiveLoadingAsyncButtonLab />;
  if (term.num === 36) return <LiveDisabledButtonLab />;
  if (term.num === 37) return <LiveConfirmDialogButtonLab isConfirm={true} />;
  if (term.num === 38) return <LiveConfirmDialogButtonLab isConfirm={false} />;
  if (term.num === 39) return <LiveBackButtonLab />;
  if (term.num === 40) return <LiveUndoRedoHistoryLab />;

  // -------------------------------------------------------------
  // Category 03: Navigation & Menus (#041 ~ #060) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 41) return <LiveNavbarLab />;
  if (term.num === 42) return <LiveMenuBarLab />;
  if (term.num === 43) return <LiveSidebarLab />;
  if (term.num === 44) return <LiveSideNavLab />;
  if (term.num === 45) return <LiveDrawerLab />;
  if (term.num === 46) return <LiveHamburgerLab />;
  if (term.num === 47) return <LiveDropdownMenuLab />;
  if (term.num === 48) return <LiveContextMenuLab />;
  if (term.num === 49) return <LiveOverflowMenuLab />;
  if (term.num === 50) return <LiveTabsLab />;
  if (term.num === 51) return <LiveVerticalTabsLab />;
  if (term.num === 52) return <LiveBreadcrumbLab />;
  if (term.num === 53) return <LivePaginationLab />;
  if (term.num === 54) return <LiveStepperLab />;
  if (term.num === 55) return <LiveWizardLab />;
  if (term.num === 56) return <LiveAnchorNavLab />;
  if (term.num === 57) return <LiveBottomNavLab />;
  if (term.num === 58) return <LiveNavRailLab />;
  if (term.num === 59) return <LiveMegaMenuLab />;
  if (term.num === 60) return <LiveCommandPaletteLab />;

  // 2. Fallback for Buttons & Actions (Cat 2)
  if (cat === 2 || sch.includes('button') || termName.includes('button') || termName.includes('fab')) {
    if (termName.includes('split')) return <LiveSplitButtonDemo />;
    if (termName.includes('group')) return <LiveButtonGroupLab />;
    if (termName.includes('fab') || termName.includes('floating')) return <LiveSpeedDialFabLab />;
    return <LiveButtonMatrixDemo term={term} />;
  }

  // 3. Navigation & Menus (Cat 3)
  if (cat === 3 || sch.includes('nav') || sch.includes('tab') || sch.includes('menu')) {
    if (termName.includes('breadcrumb')) return <LiveBreadcrumbDemo />;
    if (termName.includes('command') || termName.includes('palette')) return <LiveCommandPaletteDemo />;
    if (termName.includes('tab')) return <LiveTabsInteractiveDemo />;
    return <LiveNavigationShellDemo term={term} />;
  }

  // -------------------------------------------------------------
  // Category 04: Layout & Containers (#061 ~ #080) Differentiated Labs
  // -------------------------------------------------------------
  if (term.num === 61) return <LiveContainerLab />;
  if (term.num === 62) return <LivePanelLab />;
  if (term.num === 63) return <LivePaneLab />;
  if (term.num === 64) return <LiveSplitPaneLab />;
  if (term.num === 65) return <LiveResizablePaneLab />;
  if (term.num === 66) return <LiveResizableSplitPaneLab />;
  if (term.num === 67) return <LiveSplitterLab />;
  if (term.num === 68) return <LiveResizeHandleLab />;
  if (term.num === 69) return <LiveDividerLab />;
  if (term.num === 70) return <LiveSectionLab />;
  if (term.num === 71) return <LiveCardLab />;
  if (term.num === 72) return <LiveGridLayoutLab />;
  if (term.num === 73) return <LiveFlexLayoutLab />;
  if (term.num === 74) return <LiveStackLayoutLab />;
  if (term.num === 75) return <LiveMasonryLayoutLab />;
  if (term.num === 76) return <LiveResponsiveLayoutLab />;
  if (term.num === 77) return <LiveAdaptiveLayoutLab />;
  if (term.num === 78) return <LiveFluidLayoutLab />;
  if (term.num === 79) return <LiveFixedLayoutLab />;
  if (term.num === 80) return <LiveAspectRatioBoxLab />;

  // -------------------------------------------------------------
  // Category 05: Scrolling, Positioning & Virtualization (#081 ~ #100)
  // -------------------------------------------------------------
  if (term.num === 81) return <LiveScrollbarLab />;
  if (term.num === 82) return <LiveVerticalScrollbarLab />;
  if (term.num === 83) return <LiveHorizontalScrollbarLab />;
  if (term.num === 84) return <LiveFloatingScrollbarLab />;
  if (term.num === 85) return <LiveOverlayScrollbarLab />;
  if (term.num === 86) return <LiveScrollContainerLab />;
  if (term.num === 87) return <LiveScrollablePaneLab />;
  if (term.num === 88) return <LiveViewportLab />;
  if (term.num === 89) return <LiveOverflowLab />;
  if (term.num === 90) return <LiveStickyElementLab />;
  if (term.num === 91) return <LiveStickyHeaderLab />;
  if (term.num === 92) return <LiveStickyColumnLab />;
  if (term.num === 93) return <LiveFixedElementLab />;
  if (term.num === 94) return <LiveFloatingElementLab />;
  if (term.num === 95) return <LiveOverlayLab />;
  if (term.num === 96) return <LiveScrollSnapLab />;
  if (term.num === 97) return <LiveInfiniteScrollLab />;
  if (term.num === 98) return <LiveVirtualScrollLab />;
  if (term.num === 99) return <LiveScrollShadowLab />;
  if (term.num === 100) return <LiveAutoScrollLab />;

  // -------------------------------------------------------------
  // Category 06: Tables & Data Grids (#101 ~ #120)
  // -------------------------------------------------------------
  if (term.num === 101) return <LiveBasicTableLab />;
  if (term.num === 102) return <LiveDataTableLab />;
  if (term.num === 103) return <LiveDataGridLab />;
  if (term.num === 104) return <LiveTreeViewLab />;
  if (term.num === 105) return <LiveTreeGridLab />;
  if (term.num === 106) return <LiveRowLab />;
  if (term.num === 107) return <LiveColumnLab />;
  if (term.num === 108) return <LiveCellLab />;
  if (term.num === 109) return <LiveColumnHeaderLab />;
  if (term.num === 110) return <LiveRowHeaderLab />;
  if (term.num === 111) return <LiveFrozenRowLab />;
  if (term.num === 112) return <LiveFrozenColumnLab />;
  if (term.num === 113) return <LiveSortableColumnLab />;
  if (term.num === 114) return <LiveFilterableColumnLab />;
  if (term.num === 115) return <LiveColumnResizingLab />;
  if (term.num === 116) return <LiveColumnReorderingLab />;
  if (term.num === 117) return <LiveRowReorderingLab />;
  if (term.num === 118) return <LiveInlineEditingLab />;
  if (term.num === 119) return <LiveExpandableRowLab />;
  if (term.num === 120) return <LiveSummaryRowLab />;

  // -------------------------------------------------------------
  // Category 07: Disclosure & Hierarchy (#121 ~ #140) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 121) return <LiveAccordionLab />;
  if (term.num === 122) return <LiveCollapsiblePanelLab />;
  if (term.num === 123) return <LiveExpandablePanelLab />;
  if (term.num === 124) return <LiveDisclosureLab />;
  if (term.num === 125) return <LiveChevronLab />;
  if (term.num === 126) return <LiveCaretLab />;
  if (term.num === 127) return <LiveTreeNodeLab />;
  if (term.num === 128) return <LiveParentNodeLab />;
  if (term.num === 129) return <LiveChildNodeLab />;
  if (term.num === 130) return <LiveLeafNodeLab />;
  if (term.num === 131) return <LiveIndentationLab />;
  if (term.num === 132) return <LiveHierarchyLineLab />;
  if (term.num === 133) return <LiveExpanderLab />;
  if (term.num === 134) return <LiveCollapseAllLab />;
  if (term.num === 135) return <LiveExpandAllLab />;
  if (term.num === 136) return <LiveDrillDownLab />;
  if (term.num === 137) return <LiveDrillUpLab />;
  if (term.num === 138) return <LiveNestedListLab />;
  if (term.num === 139) return <LiveOutlineViewLab />;
  if (term.num === 140) return <LiveHierarchyBreadcrumbLab />;

  // -------------------------------------------------------------
  // Category 08: Dialogs, Popups & Overlays (#141 ~ #160) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 141) return <LiveModalLab />;
  if (term.num === 142) return <LiveDialogLab />;
  if (term.num === 143) return <LiveAlertDialogLab />;
  if (term.num === 144) return <LiveConfirmDialogLab />;
  if (term.num === 145) return <LivePopoverLab />;
  if (term.num === 146) return <LivePopupLab />;
  if (term.num === 147) return <LiveTooltipLab />;
  if (term.num === 148) return <LiveContextualPopoverLab />;
  if (term.num === 149) return <LiveDrawerOverlayLab />;
  if (term.num === 150) return <LiveBackdropLab />;
  if (term.num === 151) return <LiveScrimLab />;
  if (term.num === 152) return <LiveLightboxLab />;
  if (term.num === 153) return <LiveSheetLab />;
  if (term.num === 154) return <LiveBottomSheetLab />;
  if (term.num === 155) return <LiveSideSheetLab />;
  if (term.num === 156) return <LiveAnchoredPopupLab />;
  if (term.num === 157) return <LiveNonModalDialogLab />;
  if (term.num === 158) return <LiveFullscreenModalLab />;
  if (term.num === 159) return <LiveInlineDialogLab />;
  if (term.num === 160) return <LiveCoachmarkLab />;

  // -------------------------------------------------------------
  // Category 09: Feedback & Status (#161 ~ #180) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 161) return <LiveAlertBannerLab />;
  if (term.num === 162) return <LiveToastLab />;
  if (term.num === 163) return <LiveSnackbarLab />;
  if (term.num === 164) return <LiveNotificationCenterLab />;
  if (term.num === 165) return <LiveBadgeLab />;
  if (term.num === 166) return <LiveStatusIndicatorLab />;
  if (term.num === 167) return <LiveStatusDotLab />;
  if (term.num === 168) return <LiveProgressBarLab />;
  if (term.num === 169) return <LiveProgressRingLab />;
  if (term.num === 170) return <LiveSpinnerLab />;
  if (term.num === 171) return <LiveSkeletonLab />;
  if (term.num === 172) return <LiveEmptyStateLab />;
  if (term.num === 173) return <LiveErrorStateLab />;
  if (term.num === 174) return <LiveSuccessStateLab />;
  if (term.num === 175) return <LiveWarningStateLab />;
  if (term.num === 176) return <LiveInfoStateLab />;
  if (term.num === 177) return <LiveCalloutLab />;
  if (term.num === 178) return <LiveInlineValidationLab />;
  if (term.num === 179) return <LiveErrorMessageLab />;
  if (term.num === 180) return <LiveSuccessMessageLab />;

  // -------------------------------------------------------------
  // Category 10: States & Interaction (#181 ~ #200) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 181) return <LiveDefaultStateLab />;
  if (term.num === 182) return <LiveHoverStateLab />;
  if (term.num === 183) return <LiveFocusStateLab />;
  if (term.num === 184) return <LiveActivePressedStateLab />;
  if (term.num === 185) return <LiveSelectedStateLab />;
  if (term.num === 186) return <LiveDisabledStateLab />;
  if (term.num === 187) return <LiveReadonlyStateLab />;
  if (term.num === 188) return <LiveCheckedStateLab />;
  if (term.num === 189) return <LiveUncheckedStateLab />;
  if (term.num === 190) return <LiveIndeterminateStateLab />;
  if (term.num === 191) return <LiveExpandedStateLab />;
  if (term.num === 192) return <LiveCollapsedStateLab />;
  if (term.num === 193) return <LiveLoadingStateLab />;
  if (term.num === 194) return <LiveStateErrorLab />;
  if (term.num === 195) return <LiveStateWarningLab />;
  if (term.num === 196) return <LiveStateSuccessLab />;
  if (term.num === 197) return <LivePressedStateLab />;
  if (term.num === 198) return <LiveDraggedStateLab />;
  if (term.num === 199) return <LiveDropTargetStateLab />;
  if (term.num === 200) return <LiveFocusVisibleStateLab />;

  // -------------------------------------------------------------
  // Category 11: Drag, Drop & Direct Manipulation (#201 ~ #220) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 201) return <LiveDragAndDropLab />;
  if (term.num === 202) return <LiveDraggableLab />;
  if (term.num === 203) return <LiveDroppableLab />;
  if (term.num === 204) return <LiveDropZoneLab />;
  if (term.num === 205) return <LiveDragHandleLab />;
  if (term.num === 206) return <LiveGrabHandleLab />;
  if (term.num === 207) return <LiveGripLab />;
  if (term.num === 208) return <LiveDropIndicatorLab />;
  if (term.num === 209) return <LiveDragPreviewLab />;
  if (term.num === 210) return <LiveGhostElementLab />;
  if (term.num === 211) return <LivePlaceholderDnDLab />;
  if (term.num === 212) return <LiveSnapLab />;
  if (term.num === 213) return <LiveSnapPointLab />;
  if (term.num === 214) return <LiveSnapGridLab />;
  if (term.num === 215) return <LiveMagneticSnapLab />;
  if (term.num === 216) return <LiveFreeDragLab />;
  if (term.num === 217) return <LiveDirectResizeLab />;
  if (term.num === 218) return <LiveDirectMoveLab />;
  if (term.num === 219) return <LivePanLab />;
  if (term.num === 220) return <LiveRubberBandLab />;

  // -------------------------------------------------------------
  // Category 12: Timeline, Charts & Visualization (#221 ~ #240) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 221) return <LiveTimelineLab />;
  if (term.num === 222) return <LiveGanttChartLab />;
  if (term.num === 223) return <LiveTimeAxisLab />;
  if (term.num === 224) return <LiveTimeScaleLab />;
  if (term.num === 225) return <LiveTimelineHeaderLab />;
  if (term.num === 226) return <LiveTimelineRowLab />;
  if (term.num === 227) return <LiveTimelineBarLab />;
  if (term.num === 228) return <LivePlayheadLab />;
  if (term.num === 229) return <LiveTimeCursorLab />;
  if (term.num === 230) return <LiveMarkerLab />;
  if (term.num === 231) return <LiveMilestoneLab />;
  if (term.num === 232) return <LiveGuideLineLab />;
  if (term.num === 233) return <LiveGridLineLab />;
  if (term.num === 234) return <LiveMajorTickLab />;
  if (term.num === 235) return <LiveMinorTickLab />;
  if (term.num === 236) return <LiveZoomControlLab />;
  if (term.num === 237) return <LiveZoomToFitLab />;
  if (term.num === 238) return <LiveRangeSelectionLab />;
  if (term.num === 239) return <LiveBrushLab />;
  if (term.num === 240) return <LiveMiniMapLab />;

  // -------------------------------------------------------------
  // Category 13: Canvas, Nodes & Diagramming (#241 ~ #260) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 241) return <LiveCanvasLab />;
  if (term.num === 242) return <LiveWorkspaceLab />;
  if (term.num === 243) return <LiveNodeLab />;
  if (term.num === 244) return <LiveEdgeLab />;
  if (term.num === 245) return <LiveConnectorLab />;
  if (term.num === 246) return <LivePortLab />;
  if (term.num === 247) return <LiveAnchorPointLab />;
  if (term.num === 248) return <LiveControlPointLab />;
  if (term.num === 249) return <LiveTransformHandleLab />;
  if (term.num === 250) return <LiveBoundingBoxLab />;
  if (term.num === 251) return <LiveSelectionBoxLab />;
  if (term.num === 252) return <LiveMarqueeSelectionLab />;
  if (term.num === 253) return <LiveLassoSelectionLab />;
  if (term.num === 254) return <LiveGridLab />;
  if (term.num === 255) return <LiveRulerLab />;
  if (term.num === 256) return <LiveGuideLab />;
  if (term.num === 257) return <LiveSmartGuideLab />;
  if (term.num === 258) return <LiveAlignmentLab />;
  if (term.num === 259) return <LiveDistributionLab />;
  if (term.num === 260) return <LiveAutoLayoutLab />;

  // -------------------------------------------------------------
  // Category 14: Forms, Validation & Data Entry (#261 ~ #280) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 261) return <LiveFormLab />;
  if (term.num === 262) return <LiveFormGroupLab />;
  if (term.num === 263) return <LiveFieldsetLab />;
  if (term.num === 264) return <LiveLegendLab />;
  if (term.num === 265) return <LiveLabelLab />;
  if (term.num === 266) return <LiveHelperTextLab />;
  if (term.num === 267) return <LivePlaceholderLab />;
  if (term.num === 268) return <LiveRequiredFieldLab />;
  if (term.num === 269) return <LiveOptionalFieldLab />;
  if (term.num === 270) return <LiveValidationLab />;
  if (term.num === 271) return <LiveClientSideValidationLab />;
  if (term.num === 272) return <LiveServerSideValidationLab />;
  if (term.num === 273) return <LiveInlineErrorLab />;
  if (term.num === 274) return <LiveInputMaskLab />;
  if (term.num === 275) return <LiveCharacterCounterLab />;
  if (term.num === 276) return <LiveClearButtonLab />;
  if (term.num === 277) return <LiveResetFormLab />;
  if (term.num === 278) return <LiveDirtyStateLab />;
  if (term.num === 279) return <LiveAutosaveLab />;
  if (term.num === 280) return <LiveDraftStateLab />;

  // -------------------------------------------------------------
  // Category 15: Accessibility, System & Advanced Patterns (#281 ~ #300) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 281) return <LiveFocusRingLab />;
  if (term.num === 282) return <LiveKeyboardNavLab />;
  if (term.num === 283) return <LiveTabOrderLab />;
  if (term.num === 284) return <LiveSkipLinkLab />;
  if (term.num === 285) return <LiveAriaLabelLab />;
  if (term.num === 286) return <LiveScreenReaderTextLab />;
  if (term.num === 287) return <LiveHighContrastLab />;
  if (term.num === 288) return <LiveDarkModeLab />;
  if (term.num === 289) return <LiveLightModeLab />;
  if (term.num === 290) return <LiveThemeLab />;
  if (term.num === 291) return <LiveDesignTokenLab />;
  if (term.num === 292) return <LiveComponentLab />;
  if (term.num === 293) return <LiveVariantLab />;
  if (term.num === 294) return <LiveStateMachineLab />;
  if (term.num === 295) return <LiveBreakpointLab />;
  if (term.num === 296) return <LiveLazyLoadingLab />;
  if (term.num === 297) return <LiveVirtualizationLab />;
  if (term.num === 298) return <LiveOptimisticUILab />;
  if (term.num === 299) return <LiveUndoStackLab />;
  if (term.num === 300) return <LiveCommandBarLab />;

  // -------------------------------------------------------------
  // Category 16: Layout Frame & Panes (#301 ~ #330) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 301) return <LiveAppShellLab />;
  if (term.num === 302) return <LiveAppFrameLab />;
  if (term.num === 303) return <LiveMasterDetailLab />;
  if (term.num === 304) return <LiveTwoPaneLab />;
  if (term.num === 305) return <LiveThreePaneLab />;
  if (term.num === 306) return <LiveSplitViewLab />;
  if (term.num === 307) return <LiveNestedSplitLab />;
  if (term.num === 308) return <LiveDockablePanelLab />;
  if (term.num === 309) return <LiveDockingLayoutLab />;
  if (term.num === 310) return <LiveCollapsibleSidebarLab />;
  if (term.num === 311) return <LiveResizableSidebarLab />;
  if (term.num === 312) return <LiveInspectorPanelLab />;
  if (term.num === 313) return <LivePropertiesPanelLab />;
  if (term.num === 314) return <LiveUtilityPanelLab />;
  if (term.num === 315) return <LiveWorkspaceRegionLab />;
  if (term.num === 316) return <LiveContentRegionLab />;
  if (term.num === 317) return <LiveHeaderRegionLab />;
  if (term.num === 318) return <LiveFooterRegionLab />;
  if (term.num === 319) return <LiveStatusBarLab />;
  if (term.num === 320) return <LiveToolbarRegionLab />;
  if (term.num === 321) return <LiveContextToolbarLab />;
  if (term.num === 322) return <LivePanelStackLab />;
  if (term.num === 323) return <LivePanelGroupLab />;
  if (term.num === 324) return <LiveRespSplitLab />;
  if (term.num === 325) return <LiveMinMaxConstraintLab />;
  if (term.num === 326) return <LiveCollapseThresholdLab />;
  if (term.num === 327) return <LiveStickyWorkspaceHeaderLab />;
  if (term.num === 328) return <LiveIndepScrollLab />;
  if (term.num === 329) return <LiveSyncScrollLab />;
  if (term.num === 330) return <LiveScrollBoundaryLab />;

  // -------------------------------------------------------------
  // Category 17: Table · Grid · High-Capacity Data Processing (#331 ~ #360) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 331) return <LiveEditableDataGridLab />;
  if (term.num === 332) return <LiveSpreadsheetGridLab />;
  if (term.num === 333) return <LiveCellEditorLab />;
  if (term.num === 334) return <LiveCellRendererLab />;
  if (term.num === 335) return <LiveRowSelectionLab />;
  if (term.num === 336) return <LiveCellRangeSelectionLab />;
  if (term.num === 337) return <LiveMultiRowSelectionLab />;
  if (term.num === 338) return <LivePinnedColumnLab />;
  if (term.num === 339) return <LivePinnedRowLab />;
  if (term.num === 340) return <LiveStickyTableHeaderLab />;
  if (term.num === 341) return <LiveMultiLevelHeaderLab />;
  if (term.num === 342) return <LiveGroupedColumnLab />;
  if (term.num === 343) return <LiveColumnVisibilityLab />;
  if (term.num === 344) return <LiveColumnChooserLab />;
  if (term.num === 345) return <LiveColumnPinningLab />;
  if (term.num === 346) return <LiveColumnAutosizeLab />;
  if (term.num === 347) return <LiveFitColumnsToViewLab />;
  if (term.num === 348) return <LiveRowHeightAutoLab />;
  if (term.num === 349) return <LiveDenseTableLab />;
  if (term.num === 350) return <LiveComfortableTableLab />;
  if (term.num === 351) return <LiveZebraStripingLab />;
  if (term.num === 352) return <LiveHoverRowHighlightLab />;
  if (term.num === 353) return <LiveActiveCellLab />;
  if (term.num === 354) return <LiveDirtyCellLab />;
  if (term.num === 355) return <LiveValidationCellLab />;
  if (term.num === 356) return <LiveComputedColumnLab />;
  if (term.num === 357) return <LiveAggregateRowLab />;
  if (term.num === 358) return <LiveGroupRowLab />;
  if (term.num === 359) return <LiveRowDetailLab />;
  if (term.num === 360) return <LiveInlineRowActionsLab />;

  // -------------------------------------------------------------
  // Category 18: Textbox · Memo & Text Editing (#361 ~ #390) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 361) return <LiveSingleLineTextBoxLab />;
  if (term.num === 362) return <LiveMultiLineTextBoxLab />;
  if (term.num === 363) return <LiveAutoGrowingTextareaLab />;
  if (term.num === 364) return <LiveFixedHeightTextareaLab />;
  if (term.num === 365) return <LiveResizableTextareaLab />;
  if (term.num === 366) return <LiveInlineTextEditorLab />;
  if (term.num === 367) return <LiveContenteditableLab />;
  if (term.num === 368) return <LiveFloatingTextBoxLab />;
  if (term.num === 369) return <LiveAnchoredTextBoxLab />;
  if (term.num === 370) return <LiveViewportFixedTextBoxLab />;
  if (term.num === 371) return <LiveDraggableTextBoxLab />;
  if (term.num === 372) return <LiveResizableTextBoxLab />;
  if (term.num === 373) return <LiveEditableOverlayLabelLab />;
  if (term.num === 374) return <LiveTextBoxHandleLab />;
  if (term.num === 375) return <LiveTextOverflowLab />;
  if (term.num === 376) return <LiveTextWrappingLab />;
  if (term.num === 377) return <LiveNoWrapTextLab />;
  if (term.num === 378) return <LiveEllipsisLab />;
  if (term.num === 379) return <LiveExpandableTextLab />;
  if (term.num === 380) return <LiveReadOnlyTextFieldLab />;
  if (term.num === 381) return <LiveDisabledTextFieldLab />;
  if (term.num === 382) return <LivePrefixSuffixFieldLab />;
  if (term.num === 383) return <LiveUnitInputLab />;
  if (term.num === 384) return <LiveMaskedTextInputLab />;
  if (term.num === 385) return <LiveMonospaceTextFieldLab />;
  if (term.num === 386) return <LiveSearchableTextBoxLab />;
  if (term.num === 387) return <LiveDebouncedTextInputLab />;
  if (term.num === 388) return <LiveTextSelectionToolbarLab />;
  if (term.num === 389) return <LiveWysiwygEditorLab />;
  if (term.num === 390) return <LiveMarkdownEditorLab />;

  // -------------------------------------------------------------
  // Category 19: Window, Dialog & Menu Bars (#391 ~ #430) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 391) return <LiveWindowTitleBarLab />;
  if (term.num === 392) return <LiveWindowControlButtonsLab />;
  if (term.num === 393) return <LiveDesktopMenuBarLab />;
  if (term.num === 394) return <LiveDropdownMenuItemLab />;
  if (term.num === 395) return <LiveMenuSeparatorLab />;
  if (term.num === 396) return <LiveSubmenuLab />;
  if (term.num === 397) return <LiveCheckedMenuItemLab />;
  if (term.num === 398) return <LiveRadioMenuItemLab />;
  if (term.num === 399) return <LiveDisabledMenuItemLab />;
  if (term.num === 400) return <LiveModalWindowLab />;
  if (term.num === 401) return <LiveModelessDialogLab />;
  if (term.num === 402) return <LiveBackdropClickDismissLab />;
  if (term.num === 403) return <LiveFloatingPaletteLab />;
  if (term.num === 404) return <LiveWindowSnappingLab />;
  if (term.num === 405) return <LiveWindowMinimizeLab />;
  if (term.num === 406) return <LiveWindowMaximizeRestoreLab />;
  if (term.num === 407) return <LiveCascadeWindowsLab />;
  if (term.num === 408) return <LiveTileWindowsLab />;
  if (term.num === 409) return <LiveBringToFrontLab />;
  if (term.num === 410) return <LiveStickyNotesLab />;
  if (term.num === 411) return <LiveAlwaysOnTopPinLab />;
  if (term.num === 412) return <LiveWindowDockablePanelLab />;
  if (term.num === 413) return <LiveWindowResizeGripsLab />;
  if (term.num === 414) return <LiveWindowOpacitySliderLab />;
  if (term.num === 415) return <LiveSplitPaneDividerLab />;
  if (term.num === 416) return <LiveMagneticSnapZoneLab />;
  if (term.num === 417) return <LiveWindowRollUpLab />;
  if (term.num === 418) return <LiveFloatingActionRibbonLab />;
  if (term.num === 419) return <LiveWindowFocusDimmerLab />;
  if (term.num === 420) return <LiveMultiDocWorkspaceGridLab />;
  if (term.num === 421) return <LiveContextNestedFlyoutLab />;
  if (term.num === 422) return <LiveRadialPieMenuLab />;
  if (term.num === 423) return <LiveMenuMnemonicUnderlineLab />;
  if (term.num === 424) return <LiveRecentFilesMenuLab />;
  if (term.num === 425) return <LiveHamburgerDrawerMenuLab />;
  if (term.num === 426) return <LiveFloatingInspectorLab />;
  if (term.num === 427) return <LiveTaskbarThumbnailPeekLab />;
  if (term.num === 428) return <LiveSystemStatusBarLab />;
  if (term.num === 429) return <LiveSnapLayoutsSelectorLab />;
  if (term.num === 430) return <LiveCrashRecoveryBannerLab />;

  // -------------------------------------------------------------
  // Category 20: Mouse & Pointer Controls (#431 ~ #470) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 431) return <LivePointerHoverLab />;
  if (term.num === 432) return <LivePointerActivePressLab />;
  if (term.num === 433) return <LiveDoubleClickActionLab />;
  if (term.num === 434) return <LiveRightClickContextMenuLab />;
  if (term.num === 435) return <LiveMiddleClickPanLab />;
  if (term.num === 436) return <LiveMouseWheelZoomLab />;
  if (term.num === 437) return <LiveCursorCrosshairLab />;
  if (term.num === 438) return <LiveCursorGrabLab />;
  if (term.num === 439) return <LiveCursorResizeLab />;
  if (term.num === 440) return <LivePointerCaptureLab />;
  if (term.num === 441) return <LivePointerLockFPSLab />;
  if (term.num === 442) return <LiveMomentumInertiaScrollLab />;
  if (term.num === 443) return <LiveElasticRubberBandingLab />;
  if (term.num === 444) return <LiveMagneticCursorSnapLab />;
  if (term.num === 445) return <LiveCustomCursorTrailLab />;
  if (term.num === 446) return <LiveStylusPressureTiltLab />;
  if (term.num === 447) return <LiveHoverScrubTimelineLab />;
  if (term.num === 448) return <LivePinchSpreadZoomLab />;
  if (term.num === 449) return <LiveMultiTouchRotationLab />;
  if (term.num === 450) return <LiveTouchLongPressHapticLab />;
  if (term.num === 451) return <LiveDirectCanvasPanLab />;
  if (term.num === 452) return <LiveSnapToGuideGridLab />;
  if (term.num === 453) return <LiveSmartDistributeGuidesLab />;
  if (term.num === 454) return <LiveThreeFingerSwipeLab />;
  if (term.num === 455) return <LiveTouchHitExpansionLab />;
  if (term.num === 456) return <LiveWheelShiftHorizontalLab />;
  if (term.num === 457) return <LiveCustomDragGhostLab />;
  if (term.num === 458) return <LiveRightClickOrbitCameraLab />;
  if (term.num === 459) return <LiveDoubleClickMaximizeLab />;
  if (term.num === 460) return <LiveTripleClickSelectLab />;
  if (term.num === 461) return <LiveDragAutoScrollLab />;
  if (term.num === 462) return <LiveClickRippleEffectLab />;
  if (term.num === 463) return <LiveBezierTangentHandleLab />;
  if (term.num === 464) return <LiveFreeformLassoSelectLab />;
  if (term.num === 465) return <LiveHoverTooltipDelayLab />;
  if (term.num === 466) return <LiveHoverCardRichFlyoutLab />;
  if (term.num === 467) return <LiveClickOutsideBackdropLab />;
  if (term.num === 468) return <LiveRightDragMeasurementLab />;
  if (term.num === 469) return <LiveDragReorderPlaceholderLab />;
  if (term.num === 470) return <LiveSpatialCompassMinimapLab />;

  // -------------------------------------------------------------
  // Category 21: Keyboard Shortcuts & Hotkeys (#471 ~ #510) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 471) return <LiveGlobalShortcutLab />;
  if (term.num === 472) return <LiveModifierKeysLab />;
  if (term.num === 473) return <LiveKeyChordLab />;
  if (term.num === 474) return <LiveArrowNudgeLab />;
  if (term.num === 475) return <LiveFocusTrapLab />;
  if (term.num === 476) return <LiveEscapeDismissLab />;
  if (term.num === 477) return <LiveShortcutCheatSheetLab />;
  if (term.num === 478) return <LiveKbdBadgeLab />;
  if (term.num === 479) return <LiveConflictResolutionLab />;
  if (term.num === 480) return <LiveTypeaheadLab />;
  if (term.num === 481) return <LiveAccessKeyLab />;
  if (term.num === 482) return <LiveSpecializedHotkeyLab termNum={482} title="Global Hotkey Listener" defaultKey="Ctrl+Shift+L" actionDesc="Global Event Listener Hook" />;
  if (term.num === 483) return <LiveSpecializedHotkeyLab termNum={483} title="Scoped Shortcut Scope" defaultKey="Editor Scoped" actionDesc="Scoped to Active Editor Node" />;
  if (term.num === 484) return <LiveShortcutCustomizerLab />;
  if (term.num === 485) return <LiveSpacebarPanLab />;
  if (term.num === 486) return <LiveSpecializedHotkeyLab termNum={486} title="Delete Selection" defaultKey="Delete / Backspace" actionDesc="Remove Selected Nodes with Undo" />;
  if (term.num === 487) return <LiveDuplicateLab />;
  if (term.num === 488) return <LiveGroupUngroupLab />;
  if (term.num === 489) return <LiveSelectAllLab />;
  if (term.num === 490) return <LiveSpecializedHotkeyLab termNum={490} title="Invert Selection" defaultKey="Ctrl+Shift+I" actionDesc="Invert Active Selection State" />;
  if (term.num === 491) return <LiveFindInPageLab />;
  if (term.num === 492) return <LiveSpecializedHotkeyLab termNum={492} title="Replace Modal" defaultKey="Ctrl+H" actionDesc="Find & Replace Query Engine" />;
  if (term.num === 493) return <LiveCommandPaletteShortcutLab />;
  if (term.num === 494) return <LiveSpecializedHotkeyLab termNum={494} title="Zoom In / Out" defaultKey="Ctrl+Plus / Minus" actionDesc="Step Zoom 50% ~ 200%" />;
  if (term.num === 495) return <LiveSpecializedHotkeyLab termNum={495} title="Zoom to Fit" defaultKey="Shift+1 / Ctrl+0" actionDesc="Fit Full Bounding Box to Pane" />;
  if (term.num === 496) return <LiveSpecializedHotkeyLab termNum={496} title="Zoom to 100%" defaultKey="Ctrl+1 / Shift+0" actionDesc="Reset 1:1 Pixel Ratio" />;
  if (term.num === 497) return <LiveSpecializedHotkeyLab termNum={497} title="Next Tab Switch" defaultKey="Ctrl+Tab" actionDesc="Next Right Tab Cycling" />;
  if (term.num === 498) return <LiveSpecializedHotkeyLab termNum={498} title="Previous Tab Switch" defaultKey="Ctrl+Shift+Tab" actionDesc="Previous Left Tab Cycling" />;
  if (term.num === 499) return <LiveSpecializedHotkeyLab termNum={499} title="Close Active Tab" defaultKey="Ctrl+W" actionDesc="Close Active Buffer Tab" />;
  if (term.num === 500) return <LiveSpecializedHotkeyLab termNum={500} title="New Tab Shortcut" defaultKey="Ctrl+T" actionDesc="Spawn Clean Buffer Tab" />;
  if (term.num === 501) return <LiveSpecializedHotkeyLab termNum={501} title="Reopen Closed Tab" defaultKey="Ctrl+Shift+T" actionDesc="Restore Last Closed Buffer" />;
  if (term.num === 502) return <LiveToggleSidebarLab />;
  if (term.num === 503) return <LiveSpecializedHotkeyLab termNum={503} title="Toggle Terminal Panel" defaultKey="Ctrl+`" actionDesc="Console Panel Slide Drawer" />;
  if (term.num === 504) return <LiveSpecializedHotkeyLab termNum={504} title="Lock / Unlock Selection" defaultKey="Ctrl+L" actionDesc="Toggle Node Edit Lock State" />;
  if (term.num === 505) return <LiveSpecializedHotkeyLab termNum={505} title="Hide / Show Element" defaultKey="Ctrl+Shift+H" actionDesc="Toggle Element Visibility CSS" />;
  if (term.num === 506) return <LiveSpecializedHotkeyLab termNum={506} title="Align Left / Center / Right" defaultKey="Alt+A / Alt+H" actionDesc="Auto Snap Alignment Axes" />;
  if (term.num === 507) return <LiveSpecializedHotkeyLab termNum={507} title="Distribute Spacing Shortcut" defaultKey="Alt+Shift+H" actionDesc="Even Gap Distribution Matrix" />;
  if (term.num === 508) return <LiveSpecializedHotkeyLab termNum={508} title="Full Screen Mode Toggle" defaultKey="F11" actionDesc="Mock Full Viewport Expansion" />;
  if (term.num === 509) return <LiveSpecializedHotkeyLab termNum={509} title="Refresh / Hard Reload" defaultKey="F5 / Ctrl+F5" actionDesc="Force Telemetry Sync Stream" />;
  if (term.num === 510) return <LiveSpecializedHotkeyLab termNum={510} title="Keyboard Accessibility Mode" defaultKey="Tab / Focus Ring" actionDesc="High-Contrast Focus Outlines" />;

  // -------------------------------------------------------------
  // Category 22: Icons & Symbols (#511 ~ #550) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 511) return <LiveActionIconLab />;
  if (term.num === 512) return <LiveStatusIconLab />;
  if (term.num === 513) return <LiveKebabIconLab />;
  if (term.num === 514) return <LiveMeatballIconLab />;
  if (term.num === 515) return <LiveHamburgerIconLab />;
  if (term.num === 516) return <LiveGripDotsIconLab />;
  if (term.num === 517) return <LiveChevronVsArrowLab />;
  if (term.num === 518) return <LiveFileTypeIconLab />;
  if (term.num === 519) return <LiveBentoGridIconLab />;
  if (term.num === 520) return <LiveSortIndicatorLab />;
  if (term.num === 521) return <LiveSpecializedIconLab termNum={521} title="Filter Active Badge" symbolDesc="Filter funnel with active count badge pill (3)" iconType="Filter Pill" />;
  if (term.num === 522) return <LiveSpecializedIconLab termNum={522} title="Search Magnifier Icon" symbolDesc="Standardized optical search glass 🔍 indicator" iconType="Search Glass" />;
  if (term.num === 523) return <LiveSpecializedIconLab termNum={523} title="Clear Input Icon" symbolDesc="Instant one-click input clear ✕ button symbol" iconType="Clear Action" />;
  if (term.num === 524) return <LivePasswordEyeLab />;
  if (term.num === 525) return <LiveSpecializedIconLab termNum={525} title="External Link Icon" symbolDesc="New tab navigation diagonal arrow ↗ indicator" iconType="External Nav" />;
  if (term.num === 526) return <LiveCopyClipboardLab />;
  if (term.num === 527) return <LiveSpecializedIconLab termNum={527} title="Download / Export Icon" symbolDesc="Downward tray vector arrow ⬇ export symbol" iconType="Download Tray" />;
  if (term.num === 528) return <LiveSpecializedIconLab termNum={528} title="Upload / Import Icon" symbolDesc="Cloud / tray upward arrow ⬆ import symbol" iconType="Upload Cloud" />;
  if (term.num === 529) return <LiveLockSecurityLab />;
  if (term.num === 530) return <LiveSpecializedIconLab termNum={530} title="Bookmark / Star Pin" symbolDesc="Favorite star rating ★ and pinned 📌 quick tokens" iconType="Star & Pin" />;
  if (term.num === 531) return <LiveNotificationBellLab />;
  if (term.num === 532) return <LiveSpecializedIconLab termNum={532} title="Settings Gear Icon" symbolDesc="Configuration gear ⚙ spinning configuration symbol" iconType="Settings Gear" />;
  if (term.num === 533) return <LiveSpecializedIconLab termNum={533} title="Help / Question Mark" symbolDesc="Help center circular ❓ contextual guide icon" iconType="Help Circle" />;
  if (term.num === 534) return <LiveSpecializedIconLab termNum={534} title="Info Tooltip Icon" symbolDesc="Informational circle ℹ parameter explanation popover" iconType="Info Badge" />;
  if (term.num === 535) return <LiveSpecializedIconLab termNum={535} title="Warning Triangle Icon" symbolDesc="Hazard alert ⚠ cautionary yellow warning marker" iconType="Warning Hazard" />;
  if (term.num === 536) return <LiveSpecializedIconLab termNum={536} title="Error Danger Icon" symbolDesc="Critical failure ⛔ red halt badge indicator" iconType="Error Danger" />;
  if (term.num === 537) return <LiveSpecializedIconLab termNum={537} title="Success Checkmark Icon" symbolDesc="Affirmative validation ✓ green checkmark badge" iconType="Success Check" />;
  if (term.num === 538) return <LiveLoadingSpinnerLab />;
  if (term.num === 539) return <LiveSpecializedIconLab termNum={539} title="Undo / Redo Icons" symbolDesc="History jump curved arrows ↺ Undo and ↻ Redo" iconType="History Arrows" />;
  if (term.num === 540) return <LiveSpecializedIconLab termNum={540} title="Trash / Delete Icon" symbolDesc="Destructive trash can 🗑 red hover alert symbol" iconType="Trash Can" />;
  if (term.num === 541) return <LiveSpecializedIconLab termNum={541} title="Edit / Pencil Icon" symbolDesc="Inline record modification ✎ pencil tool icon" iconType="Edit Pencil" />;
  if (term.num === 542) return <LiveSpecializedIconLab termNum={542} title="Add / Plus Icon" symbolDesc="Creation plus ➕ action floating button symbol" iconType="Plus Action" />;
  if (term.num === 543) return <LiveFolderTreeIconsLab />;
  if (term.num === 544) return <LiveSpecializedIconLab termNum={544} title="Refresh / Sync Icon" symbolDesc="Continuous telemetry loop 🔄 data sync symbol" iconType="Sync Loop" />;
  if (term.num === 545) return <LiveSpecializedIconLab termNum={545} title="Expand / Fullscreen" symbolDesc="Viewport maximize ⛶ full-screen expansion icon" iconType="Maximize View" />;
  if (term.num === 546) return <LiveSpecializedIconLab termNum={546} title="Collapse / Minimize" symbolDesc="Window restore ⤢ compact window sizing symbol" iconType="Minimize View" />;
  if (term.num === 547) return <LiveSpecializedIconLab termNum={547} title="Play / Pause Controls" symbolDesc="Media timeline execution ▶ Play and ⏸ Pause symbols" iconType="Media Ticker" />;
  if (term.num === 548) return <LiveSpecializedIconLab termNum={548} title="Tag / Label Icon" symbolDesc="Taxonomy label 🏷 metadata tag identifier icon" iconType="Tag Label" />;
  if (term.num === 549) return <LiveSpecializedIconLab termNum={549} title="User / Avatar Profile" symbolDesc="Account identity 👤 user authorization token icon" iconType="User Avatar" />;
  if (term.num === 550) return <LiveIconAriaLabelLab />;

  // -------------------------------------------------------------
  // Category 23: Text Hint & Placeholder (#551 ~ #590) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 551) return <LiveGhostTextLab />;
  if (term.num === 552) return <LiveFloatingLabelLab />;
  if (term.num === 553) return <LiveExampleChipsLab />;
  if (term.num === 554) return <LiveMicrocopyLab />;
  if (term.num === 555) return <LivePasswordStrengthLab />;
  if (term.num === 556) return <LiveHelpTextLab />;
  if (term.num === 557) return <LiveTextHintInlineErrorLab />;
  if (term.num === 558) return <LiveCharCounterLab />;
  if (term.num === 559) return <LiveTextHintEmptyStateLab />;
  if (term.num === 560) return <LiveTextHintTooltipLab />;
  if (term.num === 561) return <LiveBadgeCountLab />;
  if (term.num === 562) return <LiveFormatMaskLab />;
  if (term.num === 563) return <LivePrefixSuffixLab />;
  if (term.num === 564) return <LiveTextHintBreadcrumbLab />;
  if (term.num === 565) return <LiveShortcutPillLab />;
  if (term.num === 566) return <LiveTextHintAutosaveLab />;
  if (term.num === 567) return <LiveRequiredAsteriskLab />;
  if (term.num === 568) return <LiveOptionalBadgeLab />;
  if (term.num === 569) return <LiveRangeLimitLab />;
  if (term.num === 570) return <LiveSlashCommandLab />;
  if (term.num === 571) return <LiveDropzoneLab />;
  if (term.num === 572) return <LiveDestructiveWarningLab />;
  if (term.num === 573) return <LiveSearchHighlightLab />;
  if (term.num === 574) return <LiveTextHintPaginationLab />;
  if (term.num === 575) return <LiveUndoToastLab />;
  if (term.num === 576) return <LiveVersionTagLab />;
  if (term.num === 577) return <LiveStepProgressLab />;
  if (term.num === 578) return <LiveTimeRemainingLab />;
  if (term.num === 579) return <LiveReadOnlyTagLab />;
  if (term.num === 580) return <LiveUnsavedDotLab />;
  if (term.num === 581) return <LiveConnectionStatusLab />;
  if (term.num === 582) return <LiveClearFiltersLab />;
  if (term.num === 583) return <LiveExpandCollapseLab />;
  if (term.num === 584) return <LiveSelectAllHintLab />;
  if (term.num === 585) return <LiveCopyToastLab />;
  if (term.num === 586) return <LiveDidYouMeanLab />;
  if (term.num === 587) return <LiveFilterChipRemoveLab />;
  if (term.num === 588) return <LiveNavTipPillLab />;
  if (term.num === 589) return <LiveOfflineBannerLab />;
  if (term.num === 590) return <LiveAriaLiveLab />;

  // -------------------------------------------------------------
  // Category 24: Overlay & Transparency (#591 ~ #636) Dedicated Labs
  // -------------------------------------------------------------
  if (term.num === 591) return <LiveZIndexStackOrderLab />;
  if (term.num === 592) return <LiveDimmedBackdropLab />;
  if (term.num === 593) return <LiveGlassmorphismLab />;
  if (term.num === 594) return <LiveClickThroughLab />;
  if (term.num === 595) return <LiveReactPortalLab />;
  if (term.num === 596) return <LiveStackingContextLab />;
  if (term.num === 597) return <LiveBackdropBlurLab />;
  if (term.num === 598) return <LiveModalDismissLab />;
  if (term.num === 599) return <LiveScrimOverlayLab />;
  if (term.num === 600) return <LiveSkeletonOverlayLab />;
  if (term.num === 601) return <LiveStickyShadowLab />;
  if (term.num === 602) return <LiveToastStackLab />;
  if (term.num === 603) return <LiveDrawerSheetLab />;
  if (term.num === 604) return <LiveHoverCardLab />;
  if (term.num === 605) return <LiveCanvasGridLab />;
  if (term.num === 606) return <LiveMarqueeOverlayLab />;
  if (term.num === 607) return <LiveSmartGuidesLab />;
  if (term.num === 608) return <LiveWatermarkLab />;
  if (term.num === 609) return <LiveFullScreenLoadingLab />;
  if (term.num === 610) return <LiveOverlayLightboxLab />;
  if (term.num === 611) return <LiveOverlayContextMenuLab />;
  if (term.num === 612) return <LiveSpotlightSearchLab />;
  if (term.num === 613) return <LiveResizerGhostLab />;
  if (term.num === 614) return <LiveTourSpotlightLab />;
  if (term.num === 615) return <LivePulseGlowLab />;
  if (term.num === 616) return <LiveGlassBorderLab />;
  if (term.num === 617) return <LiveDropdownShieldLab />;
  if (term.num === 618) return <LiveTextFadeMaskLab />;
  if (term.num === 619) return <LiveHeatmapOverlayLab />;
  if (term.num === 620) return <LiveFABLab />;
  if (term.num === 621) return <LiveCurtainSwipeLab />;
  if (term.num === 622) return <LiveTargetSpotlightLab />;
  if (term.num === 623) return <LiveOverlayStickyTableHeaderLab />;
  if (term.num === 624) return <LiveCanvasRulerLab />;
  if (term.num === 625) return <LiveCursorCoordsLab />;
  if (term.num === 626) return <LiveMultiModalDepthLab />;
  if (term.num === 627) return <LiveGhostNodeLab />;
  if (term.num === 628) return <LiveFloatingToolbarLab />;
  if (term.num === 629) return <LiveGlassNavbarLab />;
  if (term.num === 630) return <LiveMinimapOverlayLab />;
  if (term.num === 631) return <LiveVignetteShadowLab />;
  if (term.num === 632) return <LiveLayerOpacityLab />;
  if (term.num === 633) return <LiveCollisionFlipLab />;
  if (term.num === 634) return <LiveHoverGlowLab />;
  if (term.num === 635) return <LiveZIndex3DVisualizerLab />;
  if (term.num === 636) return <LiveUniversalSystemLab />;
  if (term.num === 637) return <LiveDocumentTabBarLab />;
  if (term.num === 638) return <LiveOmnibarBreadcrumbSearchLab />;
  if (term.num === 639) return <LiveDraggableInlineEditRowLab />;
  if (term.num === 640) return <LiveSearchBarAdvancedFilterLab />;
  if (term.num === 641) return <LiveHeaderFilterToolboxLab />;
  if (term.num === 642) return <LivePivotMatrixTransformLab />;
  if (term.num === 643) return <LiveGridCellTransactionCommitLab />;
  if (term.num === 644) return <LiveCellNavigationDomSyncLab />;
  if (term.num === 645) return <LiveCascaderGridEditorLab />;
  if (term.num === 646) return <LiveBidirectionalFreezeMatrixLab />;
  if (term.num === 647) return <LiveSplitFlapStatusBadgeLab />;
  if (term.num === 648) return <LiveTacticalReconHudLab />;
  if (term.num === 649) return <LiveSharedCorridorPanelStackLab />;
  if (term.num === 650) return <LiveCctvFrustumViewshedLab />;
  if (term.num === 651) return <LiveAltitudeAdaptiveScopeMaskLab />;
  if (term.num === 652) return <LiveIdleRenderGovernorMonitorLab />;
  if (term.num === 653) return <LiveInteractiveBeadedCurtainLab />;
  if (term.num === 654) return <LiveVelocityAdaptiveChimeSynthesizerLab />;
  if (term.num === 655) return <LiveVerletStringDragDynamicsLab />;
  if (term.num === 656) return <LiveCulturalPatternGridMatrixLab />;
  if (term.num === 657) return <LivePhysicalParameterTunerDrawerLab />;
  if (term.num === 658) return <LiveCurtainRevealLayeringTransitionLab />;

  // 4. Fallback for Layout & Panes (Cat 4 & Cat 16)
  if (cat === 4 || cat === 16 || sch.includes('pane') || sch.includes('split') || sch.includes('layout')) {
    return <LiveResizableSplitPaneDemo term={term} />;
  }

  // 5. Scrolling, Positioning & Virtualization (Cat 5)
  if (cat === 5 || sch.includes('scroll') || sch.includes('sticky')) {
    return <LiveScrollPositionDemo term={term} />;
  }

  // 6. Tables & Data Grids (Cat 6 & Cat 17)
  if (cat === 6 || cat === 17 || sch.includes('table') || sch.includes('grid')) {
    if (termName.includes('tree')) return <LiveTreeViewHierarchyDemo />;
    if (termName.includes('spreadsheet') || termName.includes('editable')) return <LiveEditableSpreadsheetDemo />;
    return <LiveSortableDataTableDemo term={term} />;
  }

  // 7. Disclosure, Accordion, Tree (Cat 7)
  if (cat === 7 || sch.includes('accordion') || sch.includes('tree')) {
    if (termName.includes('tree')) return <LiveTreeViewHierarchyDemo />;
    return <LiveAccordionMultiDemo term={term} />;
  }

  // 8. Dialogs, Modals, Popovers (Cat 8 & Cat 19)
  if (cat === 8 || cat === 19 || sch.includes('modal') || sch.includes('dialog') || sch.includes('popover') || sch.includes('tooltip')) {
    if (termName.includes('popover') || termName.includes('tooltip')) return <LivePopoverTooltipDemo term={term} />;
    if (termName.includes('menu')) return <LiveWindowMenuBarDemo />;
    return <LiveModalDialogDemo term={term} />;
  }

  // 9. Feedback, Toast, Progress (Cat 9)
  if (cat === 9 || sch.includes('toast') || sch.includes('progress') || sch.includes('snackbar')) {
    if (termName.includes('progress') || termName.includes('spinner') || termName.includes('skeleton')) return <LiveProgressSkeletonDemo />;
    return <LiveToastFeedbackDemo term={term} />;
  }

  // 10. States, Interaction & Focus (Cat 10)
  if (cat === 10 || sch.includes('state') || sch.includes('interaction')) {
    return <LiveStateMatrixDemo term={term} />;
  }

  // 11. Drag & Drop (Cat 11)
  if (cat === 11 || sch.includes('drag') || sch.includes('drop')) {
    return <LiveDragDropListDemo />;
  }

  // 12. Timeline & Gantt (Cat 12)
  if (cat === 12 || sch.includes('time') || sch.includes('gantt') || sch.includes('scrub')) {
    return <LiveTimelineGanttDemo />;
  }

  // 13. Canvas & Nodes (Cat 13)
  if (cat === 13 || sch.includes('canvas') || sch.includes('node') || sch.includes('diagram')) {
    return <LiveCanvasDiagramDemo />;
  }

  // 14. Forms & Validation (Cat 14)
  if (cat === 14 || sch.includes('form') || sch.includes('validation')) {
    return <LiveFormValidationDemo />;
  }

  // 15. Accessibility & Design Tokens (Cat 15)
  if (cat === 15) {
    return <LiveAccessibilityTokenDemo term={term} />;
  }

  // 18. Textbox & Rich Editor (Cat 18)
  if (cat === 18 || sch.includes('editor') || sch.includes('code') || sch.includes('textarea')) {
    return <LiveCodeEditorDemo />;
  }

  // 20. Mouse & Pointer Controls (Cat 20)
  if (cat === 20 || sch.includes('pointer') || sch.includes('mouse')) {
    return <LivePointerInteractionLab />;
  }

  // 21. Keyboard & Shortcuts (Cat 21)
  if (cat === 21 || sch.includes('keyboard') || sch.includes('shortcut')) {
    return <LivePhysicalKeyboardLab />;
  }

  // 22. Icons & Symbols (Cat 22)
  if (cat === 22 || sch.includes('icon') || sch.includes('symbol')) {
    return <LiveIconSymbolPaletteDemo />;
  }

  // 23. Text Hint & Placeholder (Cat 23)
  if (cat === 23 || sch.includes('hint') || sch.includes('microcopy') || sch.includes('placeholder')) {
    return <LiveMicrocopyHintDemo />;
  }

  // 24. Overlay & Transparency (Cat 24)
  if (cat === 24 || sch.includes('overlay') || sch.includes('zindex') || sch.includes('glass')) {
    return <LiveZIndexStackDemo />;
  }

  return <LiveSpecializedFallbackWorkbench term={term} />;
}

/* =========================================================================
   CATEGORY 01: BASIC INPUTS SPECIALIZED INTERACTIVE LABS (#001 ~ #020)
   ========================================================================= */

// #001 Text Field Lab (Single-line with live typing & char count)
const LiveTextFieldDemo = () => {
  const [val, setVal] = useState('Servo_Controller_Node_01');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2">
      <div className="flex justify-between items-center text-xs font-mono">
        <label className="text-slate-200 font-bold">Node Identifier</label>
        <span className="text-indigo-400">{val.length} / 40 chars</span>
      </div>
      <input
        type="text"
        maxLength={40}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="w-full bg-slate-950 border-2 border-indigo-500/80 focus:border-indigo-400 rounded-xl px-3 py-2 text-xs font-mono text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        placeholder="Enter unique node name..."
      />
      <span className="text-[10px] font-mono text-slate-400">Single-line standard text input with real-time character constraint</span>
    </div>
  );
};

// #002 Textarea Lab (Multi-line with line counting & expandable text)
const LiveTextareaDemo = () => {
  const [text, setText] = useState('G00 X100.0 Y50.0 Z10.0\nM03 S24000\nG01 Z-2.5 F1200\nG01 X200.0');

  const lineCount = text.split('\n').length;

  return (
    <div className="w-full max-w-sm flex flex-col gap-1.5">
      <div className="flex justify-between items-center text-xs font-mono">
        <label className="text-slate-200 font-bold">G-Code Program Block</label>
        <span className="text-indigo-400">{lineCount} lines | {text.length} chars</span>
      </div>
      <textarea
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full bg-slate-950 border-2 border-indigo-500/80 focus:border-indigo-400 rounded-xl p-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 resize-y"
        placeholder="Type multiline instructions..."
      />
      <span className="text-[10px] font-mono text-slate-400">Multiline text entry with vertical resize and dynamic line calculation</span>
    </div>
  );
};

// #009 Select Input Lab (Form value binding with clean dropdown)
const LiveSelectInputDemo = () => {
  const [selected, setSelected] = useState('Fanuc R-30iB');
  const [open, setOpen] = useState(false);
  const options = ['Fanuc R-30iB', 'Siemens Sinumerik 840D', 'Heidenhain TNC 640', 'Beckhoff TwinCAT 3'];

  return (
    <div className="relative w-full max-w-sm text-xs font-mono">
      <div className="flex justify-between items-center mb-1">
        <label className="font-bold text-slate-200">Kinematics Controller (Form Select)</label>
        <span className="text-[10px] text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-500/30">Form Bound</span>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-slate-950 border-2 border-indigo-500/80 rounded-xl px-3 py-2.5 text-left flex justify-between items-center text-slate-100 shadow-md hover:border-indigo-400 transition"
      >
        <span className="font-bold">{selected}</span>
        <ChevronDown className={`w-4 h-4 text-indigo-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 bg-slate-900 border-2 border-indigo-500 rounded-xl shadow-2xl z-40 p-1.5 flex flex-col gap-1 animate-in fade-in">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className={`px-3 py-2 text-left rounded-lg transition flex items-center justify-between text-xs ${
                selected === opt
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>{opt}</span>
              {selected === opt && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      )}
      <p className="text-[10px] text-slate-400 mt-1">Form select: Pick exactly one predefined option to submit with data.</p>
    </div>
  );
};

// #010 Dropdown Action Menu Lab (Action triggering with visual feedback)
const LiveActionDropdownMenuDemo = () => {
  const [open, setOpen] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const actions = [
    { label: 'Duplicate Axis Node', icon: Copy, color: 'text-indigo-400' },
    { label: 'Export CNC Calibration', icon: FileCode, color: 'text-emerald-400' },
    { label: 'Reset PID Parameters', icon: RotateCcw, color: 'text-amber-400' },
    { label: 'Purge Buffer Cache', icon: Trash2, color: 'text-rose-400' },
  ];

  const handleAction = (label: string) => {
    setLastAction(`Executed: ${label}`);
    setOpen(false);
    setTimeout(() => setLastAction(null), 3000);
  };

  return (
    <div className="relative w-full max-w-sm flex flex-col items-center gap-2 text-xs font-mono">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpen(!open)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-95 transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>Axis Actions</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl shadow-2xl z-40 p-1.5 flex flex-col gap-1 animate-in fade-in">
          {actions.map((act) => {
            const Icon = act.icon;
            return (
              <button
                key={act.label}
                onClick={() => handleAction(act.label)}
                className="px-3 py-2 text-left rounded-lg text-slate-200 hover:bg-slate-800 transition flex items-center gap-2.5 text-xs font-bold"
              >
                <Icon className={`w-4 h-4 ${act.color}`} />
                <span>{act.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {lastAction && (
        <div className="p-2 bg-emerald-950 border border-emerald-500/50 rounded-lg text-emerald-300 text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{lastAction}</span>
        </div>
      )}
      <p className="text-[10px] text-slate-400">Action Menu Dropdown: Triggers contextual commands rather than setting form values.</p>
    </div>
  );
};

// #011 Combobox Lab (Editable text input + Dropdown Suggestions + Typing filter)
const LiveComboboxInputDemo = () => {
  const [val, setVal] = useState('Schneider');
  const [isOpen, setIsOpen] = useState(false);
  const allSuppliers = ['Schneider Electric', 'Siemens AG', 'ABB Robotics', 'Omron Industrial', 'Rockwell Automation', 'Mitsubishi Electric'];

  const filtered = allSuppliers.filter((s) => s.toLowerCase().includes(val.toLowerCase()));

  return (
    <div className="w-full max-w-sm flex flex-col gap-1.5 text-xs font-mono">
      <label className="font-bold text-slate-200">Hardware Vendor (Combobox: Type OR Pick)</label>
      <div className="relative">
        <div className="flex items-center bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-md">
          <input
            type="text"
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Type custom vendor or select..."
            className="flex-1 bg-transparent px-3 py-2.5 text-xs text-slate-100 focus:outline-none font-bold"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2.5 text-indigo-400 hover:text-indigo-200 border-l border-slate-800"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-1 bg-slate-900 border-2 border-indigo-500 rounded-xl shadow-2xl z-40 p-1 flex flex-col max-h-36 overflow-y-auto">
            {filtered.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setVal(item);
                  setIsOpen(false);
                }}
                className={`px-3 py-1.5 text-left text-xs rounded transition flex items-center justify-between ${
                  val === item ? 'bg-indigo-600 text-white font-bold' : 'text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span>{item}</span>
                {val === item && <Check className="w-3.5 h-3.5" />}
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="p-2 text-slate-400 text-[11px] italic">
                Press Enter to use custom: "{val}"
              </div>
            )}
          </div>
        )}
      </div>
      <span className="text-[10px] text-slate-400">Combobox combines an editable free-form text input with a suggestion dropdown list.</span>
    </div>
  );
};

// #012 Autocomplete Lab (Interactive Text Search with Instant Suggestion Chips)
const LiveAutocompleteSearchDemo = () => {
  const [query, setQuery] = useState('Mot');
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const database = ['Motor Drive Servo-350', 'Motor Stepper NEMA-23', 'Motion Controller PCI-E', 'Motherboard Embedded x86', 'Optical Modulator 10G', 'Relay Solid State 40A'];

  const suggestions = database.filter((d) => d.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 text-xs font-mono">
      <label className="font-bold text-slate-200">Catalog Search with Autocomplete</label>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedChip(null);
          }}
          placeholder="Start typing component name (e.g. Mot)..."
          className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl px-3 py-2.5 pl-9 text-xs text-slate-100 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-slate-400 font-bold uppercase">Matching Suggestions:</span>
        <div className="flex flex-wrap gap-1.5">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => {
                setQuery(s);
                setSelectedChip(s);
              }}
              className="px-2.5 py-1 rounded-lg bg-indigo-950/80 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 text-[11px] font-bold transition active:scale-95 flex items-center gap-1"
            >
              <span>{s}</span>
              <CornerDownLeft className="w-3 h-3 text-indigo-400" />
            </button>
          ))}
          {suggestions.length === 0 && (
            <span className="text-slate-500 text-xs italic">No matching suggestions for "{query}"</span>
          )}
        </div>
      </div>
      {selectedChip && (
        <div className="p-2 bg-emerald-950 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs font-bold flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>Autocomplete Applied: {selectedChip}</span>
        </div>
      )}
    </div>
  );
};

// #013 Single Slider Lab
const LiveSingleSliderDemo = () => {
  const [val, setVal] = useState(65);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono">
      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-200 font-bold">Spindle Speed Factor:</span>
        <span className="text-indigo-400 font-black text-sm">{val}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
      />
      <div className="flex justify-between text-[10px] text-slate-400">
        <span>0% (Idle)</span>
        <span>50% (Nominal)</span>
        <span>100% (Maximum)</span>
      </div>
    </div>
  );
};

// #014 Range Slider Lab (Dual Handles Min ~ Max)
const LiveDualRangeSliderDemo = () => {
  const [minVal, setMinVal] = useState(25);
  const [maxVal, setMaxVal] = useState(80);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono">
      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-200 font-bold">Temperature Operating Window:</span>
        <span className="text-indigo-400 font-black text-sm bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/40">
          {minVal}°C ~ {maxVal}°C
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-[10px] text-slate-400">Min: {minVal}°C</span>
          <input
            type="range"
            min={0}
            max={maxVal - 5}
            value={minVal}
            onChange={(e) => setMinVal(Number(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-[10px] text-slate-400">Max: {maxVal}°C</span>
          <input
            type="range"
            min={minVal + 5}
            max={120}
            value={maxVal}
            onChange={(e) => setMaxVal(Number(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Visual Dual Track Bar */}
      <div className="relative w-full h-3 bg-slate-800 rounded-full overflow-hidden">
        <div
          style={{ left: `${(minVal / 120) * 100}%`, width: `${((maxVal - minVal) / 120) * 100}%` }}
          className="absolute top-0 bottom-0 bg-indigo-500 rounded-full"
        />
      </div>
      <p className="text-[10px] text-slate-400">Range Slider allows selecting a bounded interval (lower and upper limits simultaneously).</p>
    </div>
  );
};

// #015 Stepper Input Lab (Chunky Touch Buttons [-] [+] with custom deltas)
const LiveStepperTouchDemo = () => {
  const [val, setVal] = useState(450);
  const [stepDelta, setStepDelta] = useState(25);

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-2.5 font-mono">
      <div className="flex justify-between items-center w-full text-xs">
        <label className="font-bold text-slate-200">Servo Feed Rate Stepper</label>
        <span className="text-[10px] text-indigo-400">Step: ±{stepDelta} mm/s</span>
      </div>

      {/* Chunky Stepper Control */}
      <div className="flex items-center gap-2 bg-slate-950 border-2 border-indigo-500 rounded-2xl p-2 shadow-xl">
        <button
          onClick={() => setVal((v) => Math.max(0, v - stepDelta))}
          className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 text-white font-black text-xl flex items-center justify-center transition shadow-md border border-slate-700"
        >
          -
        </button>

        <div className="w-28 text-center flex flex-col">
          <span className="text-xl font-black text-white">{val}</span>
          <span className="text-[10px] text-indigo-400 font-bold">mm / second</span>
        </div>

        <button
          onClick={() => setVal((v) => Math.min(2000, v + stepDelta))}
          className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 text-white font-black text-xl flex items-center justify-center transition shadow-md border border-slate-700"
        >
          +
        </button>
      </div>

      {/* Delta Presets */}
      <div className="flex gap-2 text-[10px]">
        {[5, 25, 100].map((d) => (
          <button
            key={d}
            onClick={() => setStepDelta(d)}
            className={`px-2 py-1 rounded-lg border transition ${
              stepDelta === d
                ? 'bg-indigo-600 border-indigo-400 text-white font-bold'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            ±{d}
          </button>
        ))}
      </div>
    </div>
  );
};

// #016 Date Picker Lab (Interactive Mini Calendar Grid)
const LiveMiniCalendarDatePickerDemo = () => {
  const [selectedDay, setSelectedDay] = useState(17);
  const [monthName, setMonthName] = useState('August 2026');

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-sm bg-slate-950 border-2 border-indigo-500 rounded-2xl p-3 shadow-2xl font-mono text-xs flex flex-col gap-2">
      {/* Month Header Navigation */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <button
          onClick={() => setMonthName('July 2026')}
          className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-bold text-slate-100 flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
          <span>{monthName}</span>
        </span>
        <button
          onClick={() => setMonthName('September 2026')}
          className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-1 text-[10px] text-slate-400 text-center font-bold">
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.slice(0, 21).map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDay(d)}
            className={`py-1 rounded-lg text-xs font-bold transition ${
              selectedDay === d
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
        <span className="text-slate-400">Selected Date:</span>
        <span className="text-indigo-300 font-bold bg-indigo-950 px-2 py-0.5 rounded border border-indigo-500/40">
          2026-08-{selectedDay < 10 ? `0${selectedDay}` : selectedDay}
        </span>
      </div>
    </div>
  );
};

// #017 Time Picker Lab (Hour : Minute : Second Spinner with AM/PM)
const LiveTimePickerDialDemo = () => {
  const [hour, setHour] = useState(14);
  const [minute, setMinute] = useState(30);
  const [second, setSecond] = useState(0);
  const [ampm, setAmpm] = useState<'AM' | 'PM'>('PM');

  return (
    <div className="w-full max-w-sm bg-slate-950 border-2 border-indigo-500 rounded-2xl p-4 shadow-2xl font-mono text-xs flex flex-col items-center gap-3">
      <div className="flex justify-between items-center w-full border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-200 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-indigo-400" />
          <span>Time Picker Dial</span>
        </span>
        <span className="text-[10px] text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-500/30">
          24H / 12H Mode
        </span>
      </div>

      {/* Time Dials */}
      <div className="flex items-center gap-2">
        {/* Hours */}
        <div className="flex flex-col items-center gap-1 bg-slate-900 p-2 rounded-xl border border-slate-800">
          <button onClick={() => setHour((h) => (h + 1) % 24)} className="text-slate-400 hover:text-white text-xs">▲</button>
          <span className="text-xl font-black text-indigo-300 w-8 text-center">{hour < 10 ? `0${hour}` : hour}</span>
          <button onClick={() => setHour((h) => (h - 1 + 24) % 24)} className="text-slate-400 hover:text-white text-xs">▼</button>
          <span className="text-[9px] text-slate-500">HH</span>
        </div>
        <span className="text-xl font-black text-slate-500">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center gap-1 bg-slate-900 p-2 rounded-xl border border-slate-800">
          <button onClick={() => setMinute((m) => (m + 5) % 60)} className="text-slate-400 hover:text-white text-xs">▲</button>
          <span className="text-xl font-black text-indigo-300 w-8 text-center">{minute < 10 ? `0${minute}` : minute}</span>
          <button onClick={() => setMinute((m) => (m - 5 + 60) % 60)} className="text-slate-400 hover:text-white text-xs">▼</button>
          <span className="text-[9px] text-slate-500">MM</span>
        </div>
        <span className="text-xl font-black text-slate-500">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center gap-1 bg-slate-900 p-2 rounded-xl border border-slate-800">
          <button onClick={() => setSecond((s) => (s + 10) % 60)} className="text-slate-400 hover:text-white text-xs">▲</button>
          <span className="text-xl font-black text-indigo-300 w-8 text-center">{second < 10 ? `0${second}` : second}</span>
          <button onClick={() => setSecond((s) => (s - 10 + 60) % 60)} className="text-slate-400 hover:text-white text-xs">▼</button>
          <span className="text-[9px] text-slate-500">SS</span>
        </div>

        {/* AM/PM Toggle */}
        <button
          onClick={() => setAmpm(ampm === 'AM' ? 'PM' : 'AM')}
          className="ml-2 px-2.5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition active:scale-95"
        >
          {ampm}
        </button>
      </div>

      <div className="text-[11px] text-slate-400">
        Timestamp: <strong className="text-white">{hour}:{minute}:{second} {ampm}</strong>
      </div>
    </div>
  );
};

// #018 Date-Time Picker Lab (Integrated Calendar Date + Dial Time)
const LiveCombinedDateTimePickerDemo = () => {
  const [date, setDate] = useState('2026-08-17');
  const [time, setTime] = useState('14:30');

  return (
    <div className="w-full max-w-sm bg-slate-950 border-2 border-indigo-500 rounded-2xl p-4 shadow-2xl font-mono text-xs flex flex-col gap-3">
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-100 flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-indigo-400" />
          <span>Integrated Date-Time Picker</span>
        </span>
        <span className="text-[10px] text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-500/30">ISO-8601</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] text-slate-400">Date (YYYY-MM-DD)</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl px-2.5 py-2 text-xs font-bold text-slate-100 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[10px] text-slate-400">Time (HH:MM)</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl px-2.5 py-2 text-xs font-bold text-slate-100 focus:outline-none"
          />
        </div>
      </div>

      <div className="p-2.5 bg-indigo-950/60 border border-indigo-500/40 rounded-xl flex items-center justify-between text-xs">
        <span className="text-slate-400">Combined Timestamp:</span>
        <span className="font-bold text-indigo-300">{date}T{time}:00.000Z</span>
      </div>
    </div>
  );
};

/* =========================================================================
   INDIVIDUAL HIGH-PRECISION INTERACTIVE LAB COMPONENTS (REST OF CATEGORIES)
   ========================================================================= */

// #123 Expandable Panel (Dedicated Component with live summary + body reveal)
const LiveExpandablePanelDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="w-full max-w-sm bg-slate-950 border border-indigo-500/60 rounded-xl overflow-hidden shadow-lg">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-3 bg-slate-900 flex items-center justify-between cursor-pointer hover:bg-slate-850 transition"
      >
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-bold text-indigo-200">Servo Axis 01 Telemetry Panel</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
            3,000 RPM
          </span>
          <ChevronDown className={`w-4 h-4 text-indigo-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </div>
      {isExpanded && (
        <div className="p-3 text-xs font-mono text-slate-300 space-y-2 border-t border-slate-800 bg-slate-950 animate-in fade-in">
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-500">Torque Current:</span>
            <span className="text-slate-200 font-bold">14.2 A (Normal)</span>
          </div>
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-500">Heatsink Temperature:</span>
            <span className="text-amber-400 font-bold">48.6 °C</span>
          </div>
          <div className="p-2 bg-indigo-950/40 rounded border border-indigo-500/20 text-[10px] text-indigo-300">
            Expandable Panel allows permanent summary inspection while collapsing heavy sub-controls.
          </div>
        </div>
      )}
    </div>
  );
};

// #124 Disclosure (Dedicated Single-Toggle Bar Component)
const LiveDisclosureOnlyDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-sm border border-amber-500/60 rounded-xl overflow-hidden bg-slate-950 shadow-lg">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-3 bg-slate-900/90 text-left flex items-center justify-between text-xs font-bold text-amber-200 hover:bg-slate-800 transition"
      >
        <div className="flex items-center gap-2">
          {open ? <ChevronDown className="w-4 h-4 text-amber-400" /> : <ChevronRight className="w-4 h-4 text-amber-400" />}
          <span>View Safety Lockout Protocols</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30">
          DISCLOSURE
        </span>
      </button>
      {open && (
        <div className="p-3 text-[11px] font-mono text-amber-100 bg-slate-950 border-t border-slate-800 space-y-1.5 animate-in fade-in">
          <p className="text-slate-300">• Emergency stop triggers immediate dynamic braking.</p>
          <p className="text-slate-300">• High-voltage interlock prevents door opening while armed.</p>
        </div>
      )}
    </div>
  );
};

// Password Input Lab
const LivePasswordInputDemo = () => {
  const [pwd, setPwd] = useState('SafetyToken#2026');
  const [show, setShow] = useState(false);

  return (
    <div className="w-full max-w-xs flex flex-col gap-2">
      <label className="text-[11px] font-bold text-slate-300 flex justify-between">
        <span>Security PIN / Token</span>
        <span className="text-indigo-400 font-mono text-[10px]">{show ? 'RAW' : 'MASKED'}</span>
      </label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className="w-full bg-slate-950 border border-indigo-500/60 rounded-lg px-3 py-2 pr-10 text-xs font-mono text-slate-100 tracking-wider focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        />
        <button
          onClick={() => setShow(!show)}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
          title="Toggle Mask"
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-indigo-400" />}
        </button>
      </div>
      <p className="text-[10px] text-slate-400 font-mono">Bullet masking with 1-click reveal toggle</p>
    </div>
  );
};

// Search Field Lab
const LiveSearchFieldDemo = () => {
  const [query, setQuery] = useState('Servo');
  const items = ['Servo Motor HG-350', 'Servo Drive MR-J4', 'Proximity Sensor', 'Optical Encoder'];
  const filtered = items.filter((i) => i.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="w-full max-w-sm flex flex-col gap-2">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter hardware catalogue..."
          className="w-full bg-slate-950 border border-indigo-500/60 rounded-xl px-3 py-2 pl-9 pr-8 text-xs font-mono text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        {query && (
          <button onClick={() => setQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white" title="검색어 지우기">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      <div className="bg-slate-950 border border-slate-800 rounded-lg p-2 flex flex-col gap-1 max-h-20 overflow-y-auto text-xs font-mono">
        {filtered.map((item) => (
          <span key={item} className="text-slate-300 hover:text-indigo-300">
            • {item}
          </span>
        ))}
        {filtered.length === 0 && <span className="text-slate-500">No matching parts</span>}
      </div>
    </div>
  );
};

// Number Stepper Lab
const LiveNumberStepperDemo = () => {
  const [val, setVal] = useState(250);

  return (
    <div className="flex flex-col items-center gap-2">
      <label className="text-[11px] font-bold text-slate-300">Target Axis Feed Rate (mm/s)</label>
      <div className="flex items-center bg-slate-950 border border-indigo-500/60 rounded-xl p-1.5 gap-2 shadow-lg">
        <button
          onClick={() => setVal((v) => Math.max(0, v - 25))}
          className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-black text-sm flex items-center justify-center transition active:scale-95"
        >
          -
        </button>
        <span className="w-20 text-center font-mono font-black text-sm text-indigo-300">{val} mm/s</span>
        <button
          onClick={() => setVal((v) => Math.min(1000, v + 25))}
          className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-black text-sm flex items-center justify-center transition active:scale-95"
        >
          +
        </button>
      </div>
      <span className="text-[10px] text-slate-400 font-mono">Constrained range: 0 ~ 1000 mm/s</span>
    </div>
  );
};

// Checkbox Lab
const LiveCheckboxDemo = () => {
  const [opts, setOpts] = useState({ limitSwitch: true, autoHome: true, logTelemetry: false });

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs text-xs font-mono">
      {(Object.keys(opts) as (keyof typeof opts)[]).map((k) => (
        <label
          key={k}
          onClick={() => setOpts({ ...opts, [k]: !opts[k] })}
          className="flex items-center gap-2.5 p-2 bg-slate-950 border border-slate-800 rounded-lg cursor-pointer hover:border-indigo-500 transition"
        >
          {opts[k] ? <CheckSquare className="w-4 h-4 text-indigo-400" /> : <Square className="w-4 h-4 text-slate-600" />}
          <span className={opts[k] ? 'text-indigo-200 font-bold' : 'text-slate-400'}>{k}</span>
        </label>
      ))}
    </div>
  );
};

// Radio Group Lab
const LiveRadioGroupDemo = () => {
  const [mode, setMode] = useState('220V Single');
  const list = ['220V Single', '380V Three-Phase', '480V Heavy Industrial'];

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs text-xs font-mono">
      {list.map((m) => (
        <label
          key={m}
          onClick={() => setMode(m)}
          className={`flex items-center gap-2.5 p-2 rounded-lg border cursor-pointer transition ${
            mode === m ? 'bg-indigo-950/60 border-indigo-500 text-indigo-200 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'
          }`}
        >
          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${mode === m ? 'border-indigo-400' : 'border-slate-600'}`}>
            {mode === m && <div className="w-2 h-2 rounded-full bg-indigo-400" />}
          </div>
          <span>{m}</span>
        </label>
      ))}
    </div>
  );
};

// Toggle Switch Lab
const LiveToggleSwitchDemo = () => {
  const [on, setOn] = useState(true);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-4 bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span className="text-xs font-bold text-slate-200">Real-time Kinematics Solvers</span>
        <button
          onClick={() => setOn(!on)}
          className={`w-12 h-6 rounded-full p-1 transition-colors flex items-center ${on ? 'bg-indigo-600 justify-end' : 'bg-slate-800 justify-start'}`}
        >
          <div className="w-4 h-4 rounded-full bg-white shadow-md transition-transform" />
        </button>
      </div>
      <span className="text-xs font-mono text-indigo-400">{on ? '● SOLVER ACTIVE (0.5ms Loop)' : '○ SOLVER BYPASS'}</span>
    </div>
  );
};

// Color / Date Picker Lab
const LivePickerDemo: React.FC<{ isColor: boolean }> = ({ isColor }) => {
  const [col, setCol] = useState('#6366f1');

  return (
    <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
      <input
        type="color"
        value={col}
        onChange={(e) => setCol(e.target.value)}
        className="w-10 h-10 rounded cursor-pointer bg-transparent border-0"
      />
      <div>
        <span className="text-xs font-bold text-slate-200 block">Status Light Accent</span>
        <span className="text-xs font-mono text-indigo-400 font-bold">{col.toUpperCase()}</span>
      </div>
      <div style={{ backgroundColor: col }} className="w-6 h-6 rounded-full shadow-lg ml-auto border border-white/20" />
    </div>
  );
};

// File Upload Lab
const LiveFileUploadDemo = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className="w-full max-w-sm border-2 border-dashed border-indigo-500/50 rounded-xl p-4 bg-slate-950/80 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-indigo-400 transition">
      <Upload className="w-6 h-6 text-indigo-400" />
      <span className="text-xs font-bold text-slate-200">
        {fileName ? `Loaded: ${fileName}` : 'Drop CAD / STEP file here'}
      </span>
      <button
        onClick={() => setFileName('Arm_Gripper_v3.STEP')}
        className="px-2.5 py-1 bg-slate-800 text-[10px] font-mono text-indigo-300 rounded hover:bg-slate-700"
      >
        Simulate CAD Upload
      </button>
    </div>
  );
};

// -------------------------------------------------------------
// Category 02: Dedicated Button & Action Interactive Labs (#021 ~ #040)
// -------------------------------------------------------------

// #021 Button (Basic default in-app action execution)
const LiveDefaultButtonLab = () => {
  const [clickCount, setClickCount] = useState(0);
  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Standard In-App Action:</span>
        <span className="text-indigo-400 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
          Executions: {clickCount}
        </span>
      </div>
      <button
        onClick={() => setClickCount((c) => c + 1)}
        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-100 text-xs font-bold rounded-xl border border-slate-600 shadow-md transition flex items-center gap-2"
      >
        <span>Execute Calculation Routine</span>
        <span className="text-indigo-400">⚡</span>
      </button>
      <p className="text-[10px] text-slate-400 text-center">Executes in-app logic/routines without changing browser URL.</p>
    </div>
  );
};

// #022 Primary Button (High visual prominence for main task)
const LivePrimaryButtonLab = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">High-Hierarchy Primary:</span>
        <span className="text-indigo-400 font-bold text-[11px]">Dominant Screen Action</span>
      </div>
      <button
        onClick={() => {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 2000);
        }}
        className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white text-xs font-black rounded-xl shadow-xl shadow-indigo-600/40 border-2 border-indigo-400 transition flex items-center justify-center gap-2"
      >
        <span>{submitted ? '✓ Manufacturing Order Dispatched' : 'Commit & Dispatch Order'}</span>
        <Sparkles className="w-4 h-4" />
      </button>
      <p className="text-[10px] text-slate-400 text-center">Solid high-contrast background with prominent elevation for primary action.</p>
    </div>
  );
};

// #023 Secondary Button (Neutral / outline alternative action)
const LiveSecondaryButtonLab = () => {
  const [previewActive, setPreviewActive] = useState(false);
  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Secondary Action:</span>
        <span className="text-slate-400 text-[11px]">Paired with Primary</span>
      </div>
      <div className="flex gap-2.5 w-full">
        <button
          onClick={() => setPreviewActive(!previewActive)}
          className={`flex-1 py-2.5 rounded-xl border-2 text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            previewActive
              ? 'bg-indigo-950 border-indigo-400 text-indigo-200'
              : 'bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-200'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{previewActive ? 'Hide Draft BOM' : 'Preview Draft BOM'}</span>
        </button>
        <button className="px-4 py-2.5 bg-indigo-600/50 text-white text-xs font-bold rounded-xl opacity-50 cursor-not-allowed">
          Primary
        </button>
      </div>
      {previewActive && (
        <div className="w-full p-2 bg-slate-900/90 rounded-lg border border-indigo-500/30 text-[11px] text-indigo-300 animate-in fade-in">
          Previewing 42 CAD Bill of Materials nodes...
        </div>
      )}
    </div>
  );
};

// #024 Tertiary Button (Low visual weight for auxiliary features)
const LiveTertiaryButtonLab = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-2.5 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Tertiary / Subtle Action:</span>
        <span className="text-slate-500 text-[10px]">Minimal Visual Noise</span>
      </div>
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="px-4 py-2 bg-slate-800/60 hover:bg-slate-800 active:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold rounded-xl border border-slate-700 transition flex items-center gap-1.5"
      >
        <Sliders className="w-3.5 h-3.5 text-indigo-400" />
        <span>{showAdvanced ? 'Hide Advanced PID Tuning' : 'Show Advanced PID Tuning'}</span>
      </button>
      {showAdvanced && (
        <div className="w-full p-2 bg-slate-900 rounded-lg border border-slate-800 text-[10px] text-slate-400 space-y-1">
          <div>• Proportional Gain (Kp): 1.45</div>
          <div>• Integral Time (Ti): 0.82 s</div>
        </div>
      )}
    </div>
  );
};

// #025 Ghost Button (Transparent background until hover/press)
const LiveGhostButtonLab = () => {
  const [resetLogs, setResetLogs] = useState(false);
  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Ghost (Transparent Baseline):</span>
        <span className="text-indigo-400 text-[11px]">Hover to Fill</span>
      </div>
      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 w-full flex items-center justify-between">
        <span className="text-xs text-slate-400">Canvas Overlay Layer</span>
        <button
          onClick={() => {
            setResetLogs(true);
            setTimeout(() => setResetLogs(false), 1500);
          }}
          className="px-3.5 py-1.5 bg-transparent hover:bg-indigo-600/20 active:bg-indigo-600/30 text-slate-300 hover:text-indigo-300 hover:border-indigo-500/50 border border-transparent rounded-lg text-xs font-bold transition flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Canvas</span>
        </button>
      </div>
      {resetLogs && <span className="text-[10px] text-emerald-400">Canvas view matrix reset to origin (0,0)</span>}
    </div>
  );
};

// #026 Text Button (Pure text with hover underline/color micro-interaction)
const LiveTextButtonLab = () => {
  const [skipped, setSkipped] = useState(false);
  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Text Button (Zero Chrome):</span>
        <span className="text-slate-500 text-[10px]">No Box Border</span>
      </div>
      <div className="flex items-center justify-between w-full bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span className="text-xs text-slate-400">Step 2: Network Bind</span>
        <button
          onClick={() => {
            setSkipped(true);
            setTimeout(() => setSkipped(false), 2000);
          }}
          className="text-xs font-bold text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/50 hover:decoration-indigo-400 decoration-2 underline-offset-4 cursor-pointer transition p-1"
        >
          Skip Configuration &rarr;
        </button>
      </div>
      {skipped && <span className="text-[10px] text-amber-400">Step skipped. Default localhost:8080 applied.</span>}
    </div>
  );
};

// #027 Icon Button (Compact symbol-only button with live tooltip)
const LiveIconButtonLab = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [log, setLog] = useState<string | null>(null);

  const actions = [
    { id: 'zoom', icon: Search, label: 'Zoom Extents (Z)' },
    { id: 'grid', icon: LayoutGrid, label: 'Toggle Isometric Grid (G)' },
    { id: 'download', icon: Download, label: 'Export DXF Geometry (E)' },
    { id: 'settings', icon: Settings, label: 'Kinematics Config' },
  ];

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Compact Icon Button Bar:</span>
        <span className="text-indigo-400 font-bold text-[10px]">{activeTooltip || 'Hover icon for tooltip'}</span>
      </div>
      <div className="flex gap-2 p-1.5 bg-slate-950 border-2 border-indigo-500/60 rounded-2xl shadow-xl">
        {actions.map((act) => {
          const IconComp = act.icon;
          return (
            <button
              key={act.id}
              onMouseEnter={() => setActiveTooltip(act.label)}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() => setLog(`Executed: ${act.label}`)}
              className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-300 flex items-center justify-center transition shadow border border-slate-800 active:scale-90"
              aria-label={act.label}
            >
              <IconComp className="w-4 h-4" />
            </button>
          );
        })}
      </div>
      {log && <span className="text-[10px] text-emerald-400">{log}</span>}
    </div>
  );
};

// #028 Toggle Button (Persistent pressed latch state)
const LiveToggleButtonLab = () => {
  const [latched, setLatched] = useState(true);
  const [laserArmed, setLaserArmed] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Toggle Button (Latch State):</span>
        <span className="text-indigo-400 text-[10px]">Active State Persists</span>
      </div>
      <div className="flex gap-2.5 w-full">
        <button
          onClick={() => setLatched(!latched)}
          className={`flex-1 py-2.5 rounded-xl border-2 text-xs font-black transition flex items-center justify-center gap-2 ${
            latched
              ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/40'
              : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${latched ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
          <span>Grid Snap: {latched ? 'LATCHED ON' : 'OFF'}</span>
        </button>

        <button
          onClick={() => setLaserArmed(!laserArmed)}
          className={`flex-1 py-2.5 rounded-xl border-2 text-xs font-black transition flex items-center justify-center gap-2 ${
            laserArmed
              ? 'bg-rose-600 border-rose-400 text-white shadow-lg shadow-rose-600/40'
              : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'
          }`}
        >
          <Flame className="w-3.5 h-3.5" />
          <span>Laser: {laserArmed ? 'ARMED' : 'SAFE'}</span>
        </button>
      </div>
      <p className="text-[10px] text-slate-400 text-center">Unlike ordinary buttons, toggle buttons stay pressed until clicked again.</p>
    </div>
  );
};

// #029 Button Group (Physically linked button toolbar)
const LiveButtonGroupLab = () => {
  const [align, setAlign] = useState<'left' | 'center' | 'right' | 'justify'>('center');

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Fused Button Group:</span>
        <span className="text-indigo-400 font-bold text-[10px]">Alignment: {align.toUpperCase()}</span>
      </div>
      <div className="inline-flex rounded-xl overflow-hidden border-2 border-indigo-500/80 bg-slate-950 shadow-xl">
        {(['left', 'center', 'right', 'justify'] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setAlign(mode)}
            className={`px-4 py-2 text-xs font-bold transition border-r last:border-r-0 border-slate-800 ${
              align === mode ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
            }`}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </button>
        ))}
      </div>
      <p className="text-[10px] text-slate-400 text-center">Adjacent buttons share borders to visually cluster related action suites.</p>
    </div>
  );
};

// #030 Segmented Control (iOS/macOS style sliding capsule 1-of-N selector)
const LiveSegmentedControlLab = () => {
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M' | '1Y' | 'ALL'>('1W');

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Segmented Control (Exclusive):</span>
        <span className="text-emerald-400 font-black text-xs bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
          Selected: {timeframe}
        </span>
      </div>
      <div className="w-full p-1 bg-slate-950 border-2 border-slate-800 rounded-full flex relative shadow-inner">
        {(['1D', '1W', '1M', '1Y', 'ALL'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTimeframe(t)}
            className={`flex-1 py-1.5 rounded-full text-xs font-black transition-all z-10 ${
              timeframe === t ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="text-[10px] text-slate-400 text-center">Controls mutually exclusive state switching with animated capsule indicator.</p>
    </div>
  );
};

// #032 Speed Dial / FAB Lab (Expanding speed dial sub-actions on hover/click)
const LiveSpeedDialFabLab = () => {
  const [open, setOpen] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-sm h-40 bg-slate-950 border-2 border-indigo-500/50 rounded-2xl p-3 flex flex-col justify-between font-mono overflow-hidden shadow-2xl">
      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-300 font-bold">Speed Dial / FAB Lab</span>
        <span className="text-[10px] text-indigo-300 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-500/40">
          {lastAction || (open ? 'Choose sub-action' : 'Click FAB [+]')}
        </span>
      </div>

      {/* Floating Speed Dial Actions Container */}
      <div className="absolute right-4 bottom-4 flex flex-col items-end gap-2 z-20">
        {open && (
          <div className="flex flex-col items-end gap-2 animate-in slide-in-from-bottom-2 fade-in">
            <button
              onClick={() => { setLastAction('Export STEP File'); setOpen(false); }}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-indigo-300 text-xs font-bold rounded-xl border border-indigo-500/40 shadow-lg flex items-center gap-2"
            >
              <span>Export STEP</span>
              <Download className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { setLastAction('Create Sub-Assembly'); setOpen(false); }}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-emerald-300 text-xs font-bold rounded-xl border border-emerald-500/40 shadow-lg flex items-center gap-2"
            >
              <span>New Sub-Assembly</span>
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Master FAB button */}
        <button
          onClick={() => setOpen(!open)}
          className={`w-12 h-12 rounded-full text-white flex items-center justify-center text-2xl font-black shadow-2xl shadow-indigo-600/50 border-2 border-indigo-400 transition-transform ${
            open ? 'bg-rose-600 rotate-45' : 'bg-indigo-600 hover:scale-105 active:scale-95'
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
};

// #033 Contextual Action Bar Button (Reveals bulk action bar when items checked)
const LiveContextualActionBarLab = () => {
  const [selected, setSelected] = useState<number[]>([1]);

  const toggleSelect = (id: number) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Contextual Action Bar:</span>
        <span className="text-indigo-400 font-bold">{selected.length} Item(s) Selected</span>
      </div>

      {/* Dynamic Contextual Action Bar */}
      {selected.length > 0 ? (
        <div className="p-2.5 bg-indigo-950 border-2 border-indigo-500 rounded-xl flex items-center justify-between shadow-xl animate-in fade-in">
          <span className="text-indigo-200 font-bold flex items-center gap-1.5">
            <CheckSquare className="w-4 h-4 text-indigo-400" />
            <span>{selected.length} items active</span>
          </span>
          <div className="flex gap-1.5">
            <button
              onClick={() => alert(`Batch calibrated ${selected.length} axes`)}
              className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-[11px] font-bold"
            >
              Calibrate
            </button>
            <button
              onClick={() => setSelected([])}
              className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[11px]"
            >
              Clear
            </button>
          </div>
        </div>
      ) : (
        <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-500 text-[11px]">
          Select items below to reveal contextual buttons
        </div>
      )}

      <div className="space-y-1.5">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            onClick={() => toggleSelect(id)}
            className={`p-2 rounded-lg border flex items-center justify-between cursor-pointer transition ${
              selected.includes(id) ? 'bg-indigo-950/40 border-indigo-500 text-indigo-200' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <span>Axis Motor Controller #{id}</span>
            <input type="checkbox" checked={selected.includes(id)} readOnly className="accent-indigo-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

// #034 Destructive / Danger Button (2-step confirmation safety latch)
const LiveDestructiveButtonLab = () => {
  const [confirmStage, setConfirmStage] = useState(false);
  const [wiped, setWiped] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-rose-400 font-bold">Destructive Action Latch:</span>
        <span className="text-slate-500 text-[10px]">2-Step Safety Guard</span>
      </div>

      {!confirmStage ? (
        <button
          onClick={() => setConfirmStage(true)}
          className="w-full py-3 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border-2 border-rose-500/60 rounded-xl text-xs font-black transition flex items-center justify-center gap-2 shadow-lg"
        >
          <Trash2 className="w-4 h-4" />
          <span>Wipe Servo Tuning Matrix</span>
        </button>
      ) : (
        <div className="w-full p-3 bg-rose-950/90 border-2 border-rose-500 rounded-xl flex flex-col gap-2 animate-in zoom-in-95">
          <div className="text-rose-200 text-xs font-bold text-center">⚠ Permanent Loss: Are you absolutely sure?</div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setWiped(true);
                setConfirmStage(false);
                setTimeout(() => setWiped(false), 2500);
              }}
              className="flex-1 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-black shadow"
            >
              Yes, Wipe Now
            </button>
            <button
              onClick={() => setConfirmStage(false)}
              className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {wiped && <span className="text-xs text-rose-400 font-bold animate-pulse">Matrix wiped successfully.</span>}
    </div>
  );
};

// #035 Loading Async Button (In-flight spinner + completion checkmark)
const LiveLoadingAsyncButtonLab = () => {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  const triggerAsync = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
      setTimeout(() => setState('idle'), 2000);
    }, 1800);
  };

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Loading / Spinner Button:</span>
        <span className="text-indigo-400 text-[10px]">Prevents Double-Click</span>
      </div>

      <button
        onClick={triggerAsync}
        disabled={state !== 'idle'}
        className={`w-full py-3 rounded-xl border-2 text-xs font-black transition flex items-center justify-center gap-2 shadow-xl ${
          state === 'loading'
            ? 'bg-indigo-950 border-indigo-500 text-indigo-300 cursor-wait'
            : state === 'success'
            ? 'bg-emerald-600 border-emerald-400 text-white'
            : 'bg-indigo-600 hover:bg-indigo-500 active:scale-95 border-indigo-400 text-white'
        }`}
      >
        {state === 'loading' && (
          <>
            <span className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
            <span>Transmitting Kinematics Payload...</span>
          </>
        )}
        {state === 'success' && (
          <>
            <span>✓ Telemetry Synchronized</span>
          </>
        )}
        {state === 'idle' && (
          <>
            <CloudUpload className="w-4 h-4" />
            <span>Upload Controller Firmware (Async)</span>
          </>
        )}
      </button>
    </div>
  );
};

// #036 Disabled Button (Visual lock + explanation tooltip)
const LiveDisabledButtonLab = () => {
  const [prereqChecked, setPrereqChecked] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Disabled Button Guard:</span>
        <span className="text-[10px] text-amber-400">{prereqChecked ? 'Requirement Met' : 'Locked'}</span>
      </div>

      <label className="flex items-center gap-2 w-full p-2 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300 cursor-pointer">
        <input
          type="checkbox"
          checked={prereqChecked}
          onChange={(e) => setPrereqChecked(e.target.checked)}
          className="accent-indigo-500"
        />
        <span>Verify Emergency Stop Circuit Safety</span>
      </label>

      <button
        disabled={!prereqChecked}
        onClick={() => alert('High-voltage contactor energized!')}
        className={`w-full py-3 rounded-xl border-2 text-xs font-black transition flex items-center justify-center gap-2 ${
          prereqChecked
            ? 'bg-emerald-600 hover:bg-emerald-500 border-emerald-400 text-white shadow-xl cursor-pointer active:scale-95'
            : 'bg-slate-900 border-slate-800 text-slate-600 cursor-not-allowed opacity-60'
        }`}
      >
        <span>{prereqChecked ? '⚡ Energize Power Bus' : '🚫 Locked (Check Safety Box)'}</span>
      </button>
    </div>
  );
};

// #037 & #038 Confirm & Cancel Modal Pair Lab
const LiveConfirmDialogButtonLab: React.FC<{ isConfirm: boolean }> = ({ isConfirm }) => {
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="w-full max-w-sm bg-slate-950 border-2 border-indigo-500/80 rounded-2xl p-4 shadow-2xl font-mono text-xs flex flex-col gap-3">
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-200">Confirmation Dialog Frame</span>
        <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${isConfirm ? 'bg-indigo-950 text-indigo-300' : 'bg-slate-800 text-slate-400'}`}>
          {isConfirm ? 'Confirm Button Emphasis' : 'Cancel Button Neutral'}
        </span>
      </div>

      <p className="text-slate-300 text-[11px]">Apply new feed rate calibration constants to Axis X, Y, Z?</p>

      {/* Button Pair: Cancel (Left/Neutral) vs Confirm (Right/Primary) */}
      <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
        <button
          onClick={() => setResult('Action Aborted (Cancel clicked)')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            !isConfirm
              ? 'bg-slate-800 border-2 border-indigo-400 text-white shadow'
              : 'bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-400'
          }`}
        >
          Cancel
        </button>
        <button
          onClick={() => setResult('Changes Applied to Flash Memory')}
          className={`px-5 py-2 rounded-xl text-xs font-black transition ${
            isConfirm
              ? 'bg-indigo-600 hover:bg-indigo-500 border-2 border-indigo-400 text-white shadow-lg shadow-indigo-600/40'
              : 'bg-indigo-600/70 text-white'
          }`}
        >
          Apply Changes
        </button>
      </div>

      {result && <span className="text-[10px] text-emerald-400 bg-emerald-950/80 p-1.5 rounded text-center">{result}</span>}
    </div>
  );
};

// #039 Back Button (Historical view navigation)
const LiveBackButtonLab = () => {
  const [screen, setScreen] = useState<'details' | 'list'>('details');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex items-center justify-between">
        <span className="text-slate-300 font-bold">Back Button Navigation:</span>
        <span className="text-indigo-400 font-mono text-[10px]">Level: {screen.toUpperCase()}</span>
      </div>

      <div className="p-3 bg-slate-950 border-2 border-indigo-500/60 rounded-2xl flex flex-col gap-3 shadow-xl">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen(screen === 'details' ? 'list' : 'details')}
            className="px-3 py-1.5 bg-slate-900 hover:bg-indigo-600 text-slate-200 hover:text-white rounded-xl border border-slate-700 text-xs font-bold transition flex items-center gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Hardware Fleet</span>
          </button>
        </div>
        <div className="p-2 bg-slate-900 rounded-lg text-slate-300 text-[11px]">
          {screen === 'details' ? 'Inspecting: CNC 5-Axis Gantry #04 (Deep View)' : 'Fleet Overview: 12 Machines Online'}
        </div>
      </div>
    </div>
  );
};

// #040 Undo / Redo Button (Undo & Redo stack with step count)
const LiveUndoRedoHistoryLab = () => {
  const [history, setHistory] = useState<string[]>(['Initial Setup', 'Add Motor', 'Set 3000 RPM']);
  const [cursor, setCursor] = useState(2);

  const canUndo = cursor > 0;
  const canRedo = cursor < history.length - 1;

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono">
      <div className="flex items-center justify-between w-full text-xs">
        <span className="text-slate-300 font-bold">Undo / Redo Stack:</span>
        <span className="text-indigo-400 font-bold text-[10px]">Step {cursor + 1} of {history.length}</span>
      </div>

      <div className="flex items-center gap-2 p-1.5 bg-slate-950 border-2 border-indigo-500 rounded-2xl shadow-xl">
        <button
          disabled={!canUndo}
          onClick={() => setCursor((c) => Math.max(0, c - 1))}
          className={`px-3 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
            canUndo ? 'bg-slate-900 hover:bg-indigo-600 text-white border border-slate-700 cursor-pointer' : 'bg-slate-950 text-slate-600 cursor-not-allowed border border-transparent'
          }`}
        >
          <Undo2 className="w-4 h-4" />
          <span>Undo</span>
        </button>

        <button
          disabled={!canRedo}
          onClick={() => setCursor((c) => Math.min(history.length - 1, c + 1))}
          className={`px-3 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
            canRedo ? 'bg-slate-900 hover:bg-indigo-600 text-white border border-slate-700 cursor-pointer' : 'bg-slate-950 text-slate-600 cursor-not-allowed border border-transparent'
          }`}
        >
          <span>Redo</span>
          <Redo2 className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            const next = `Edit #${history.length + 1}`;
            setHistory([...history.slice(0, cursor + 1), next]);
            setCursor(cursor + 1);
          }}
          className="px-2.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold"
        >
          + Action
        </button>
      </div>

      <div className="w-full p-2 bg-slate-900/80 rounded-xl border border-slate-800 text-[11px] text-slate-300 flex justify-between">
        <span>Active State:</span>
        <strong className="text-indigo-300">{history[cursor]}</strong>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Category 04: Dedicated Layout & Containers Interactive Labs (#061 ~ #080)
// -------------------------------------------------------------

// #061 Container (Max-width constraint with centered gutters)
const LiveContainerLab = () => {
  const [maxW, setMaxW] = useState<'sm' | 'md' | 'lg' | '7xl'>('md');
  return (
    <div className="w-full max-w-sm flex flex-col gap-3 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Container Max-W Frame:</span>
        <span className="text-indigo-400 font-bold text-[10px]">max-w-{maxW} mx-auto</span>
      </div>
      <div className="flex gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
        {(['sm', 'md', 'lg', '7xl'] as const).map((sz) => (
          <button
            key={sz}
            onClick={() => setMaxW(sz)}
            className={`flex-1 py-1 rounded-lg text-[10px] font-bold transition ${
              maxW === sz ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {sz.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="w-full h-28 bg-slate-950 border-2 border-dashed border-slate-800 rounded-xl p-2 flex items-center justify-center relative overflow-hidden">
        <div
          className={`h-full bg-indigo-950/80 border-2 border-indigo-500 rounded-lg p-2 flex flex-col justify-center items-center text-center transition-all duration-300 shadow-xl ${
            maxW === 'sm' ? 'w-32' : maxW === 'md' ? 'w-48' : maxW === 'lg' ? 'w-64' : 'w-full'
          }`}
        >
          <span className="text-indigo-200 font-bold text-[11px]">Centered Container</span>
          <span className="text-[9px] text-indigo-400">Gutters auto-equalize</span>
        </div>
      </div>
    </div>
  );
};

// #062 Panel (Docked functional card with header and actions)
const LivePanelLab = () => {
  const [docked, setDocked] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Independent Panel Unit:</span>
        <button
          onClick={() => setDocked(!docked)}
          className="text-[10px] text-indigo-400 hover:underline"
        >
          {docked ? 'Undock' : 'Dock to Frame'}
        </button>
      </div>
      <div
        className={`bg-slate-950 border-2 border-indigo-500/80 rounded-xl overflow-hidden shadow-2xl transition-all ${
          docked ? 'w-full' : 'w-4/5 mx-auto'
        }`}
      >
        <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-bold text-slate-200 text-xs">Laser Kinematics Panel</span>
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-slate-400 hover:text-white text-xs px-1"
          >
            {collapsed ? '▼' : '▲'}
          </button>
        </div>
        {!collapsed && (
          <div className="p-3 space-y-2 text-[11px] text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">Feed Rate:</span>
              <span className="text-emerald-400 font-bold">450 mm/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Duty Cycle:</span>
              <span className="text-indigo-300 font-bold">88.4%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #063 Pane (Single partition workspace slot)
const LivePaneLab = () => {
  const [activePane, setActivePane] = useState<'A' | 'B'>('A');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Discrete Pane Focus:</span>
        <span className="text-indigo-400 font-bold">Active: Pane {activePane}</span>
      </div>
      <div className="w-full h-32 bg-slate-950 border-2 border-slate-800 rounded-xl flex overflow-hidden p-1 gap-1">
        <div
          onClick={() => setActivePane('A')}
          className={`flex-1 rounded-lg p-2 cursor-pointer transition flex flex-col justify-between ${
            activePane === 'A'
              ? 'bg-indigo-950/80 border-2 border-indigo-400 text-indigo-200'
              : 'bg-slate-900/60 border border-slate-800 text-slate-500 hover:bg-slate-900'
          }`}
        >
          <span className="font-bold text-[10px]">PANE A: CAD Hierarchy</span>
          <span className="text-[9px]">Click to focus this pane</span>
        </div>
        <div
          onClick={() => setActivePane('B')}
          className={`flex-1 rounded-lg p-2 cursor-pointer transition flex flex-col justify-between ${
            activePane === 'B'
              ? 'bg-indigo-950/80 border-2 border-indigo-400 text-indigo-200'
              : 'bg-slate-900/60 border border-slate-800 text-slate-500 hover:bg-slate-900'
          }`}
        >
          <span className="font-bold text-[10px]">PANE B: 3D Render View</span>
          <span className="text-[9px]">Click to focus this pane</span>
        </div>
      </div>
    </div>
  );
};

// #064 Split Pane (Dual view with horizontal/vertical split switch)
const LiveSplitPaneLab = () => {
  const [splitDir, setSplitDir] = useState<'horizontal' | 'vertical'>('horizontal');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Dual Split Pane:</span>
        <button
          onClick={() => setSplitDir((d) => (d === 'horizontal' ? 'vertical' : 'horizontal'))}
          className="text-[10px] text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-500/40"
        >
          Toggle {splitDir === 'horizontal' ? 'Vertical ⬍' : 'Horizontal ⬌'}
        </button>
      </div>
      <div
        className={`w-full h-32 bg-slate-950 border-2 border-indigo-500/60 rounded-xl flex overflow-hidden ${
          splitDir === 'vertical' ? 'flex-col' : 'flex-row'
        }`}
      >
        <div className="flex-1 bg-slate-900 p-2 flex items-center justify-center text-center text-slate-300 font-bold text-[11px]">
          Workspace #1 (BOM)
        </div>
        <div className={splitDir === 'horizontal' ? 'w-1.5 bg-indigo-500' : 'h-1.5 bg-indigo-500'} />
        <div className="flex-1 bg-slate-900 p-2 flex items-center justify-center text-center text-slate-300 font-bold text-[11px]">
          Workspace #2 (Timeline)
        </div>
      </div>
    </div>
  );
};

// #065 Resizable Pane (Single pane with dynamic drag width)
const LiveResizablePaneLab = () => {
  const [widthPercent, setWidthPercent] = useState(40);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Resizable Pane Slider:</span>
        <span className="text-emerald-400 font-bold">{widthPercent}% Width</span>
      </div>
      <input
        type="range"
        min={20}
        max={80}
        value={widthPercent}
        onChange={(e) => setWidthPercent(Number(e.target.value))}
        className="accent-indigo-500"
      />
      <div className="w-full h-28 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden">
        <div
          style={{ width: `${widthPercent}%` }}
          className="bg-indigo-950 border-r-2 border-indigo-400 p-2 flex flex-col justify-between text-indigo-200"
        >
          <span className="font-bold text-[10px]">Resizable Sidebar</span>
          <span className="text-[9px] text-emerald-300">Min 20% ~ Max 80%</span>
        </div>
        <div className="flex-1 bg-slate-900 p-2 flex items-center justify-center text-slate-400 text-[10px]">
          Main Canvas
        </div>
      </div>
    </div>
  );
};

// #066 Resizable Split Pane (Simultaneous dual width counter-balance)
const LiveResizableSplitPaneLab = () => {
  const [leftRatio, setLeftRatio] = useState(50);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Linked Split Ratio:</span>
        <span className="text-indigo-400 font-bold">
          {leftRatio}% : {100 - leftRatio}%
        </span>
      </div>
      <input
        type="range"
        min={15}
        max={85}
        value={leftRatio}
        onChange={(e) => setLeftRatio(Number(e.target.value))}
        className="accent-indigo-500"
      />
      <div className="w-full h-28 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden">
        <div
          style={{ width: `${leftRatio}%` }}
          className="bg-slate-900 p-2 flex flex-col justify-center items-center text-center text-slate-200"
        >
          <span className="font-bold text-[10px]">Code View</span>
          <span className="text-[9px] text-indigo-400">{leftRatio}%</span>
        </div>
        <div className="w-2 bg-indigo-600 flex items-center justify-center cursor-col-resize shadow">
          <span className="text-[8px] text-white font-bold">⋮</span>
        </div>
        <div
          style={{ width: `${100 - leftRatio}%` }}
          className="bg-slate-900 p-2 flex flex-col justify-center items-center text-center text-slate-200"
        >
          <span className="font-bold text-[10px]">Preview</span>
          <span className="text-[9px] text-indigo-400">{100 - leftRatio}%</span>
        </div>
      </div>
    </div>
  );
};

// #067 Splitter (Hoverable handle with col-resize interaction)
const LiveSplitterLab = () => {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState(50);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Splitter Bar (Hit-Box):</span>
        <span className={hovered ? 'text-indigo-400 font-bold' : 'text-slate-500'}>
          {hovered ? 'col-resize Activated' : 'Hover splitter bar'}
        </span>
      </div>
      <div className="w-full h-28 bg-slate-950 border-2 border-slate-800 rounded-xl flex overflow-hidden relative">
        <div style={{ width: `${pos}%` }} className="bg-slate-900 p-2 flex items-center justify-center text-slate-400 text-[10px]">
          Left Pane
        </div>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`w-3 flex items-center justify-center cursor-col-resize transition-colors ${
            hovered ? 'bg-indigo-500 shadow-lg shadow-indigo-500/50' : 'bg-slate-700'
          }`}
        >
          <span className="text-[8px] text-white">↔</span>
        </div>
        <div style={{ width: `${100 - pos}%` }} className="bg-slate-900 p-2 flex items-center justify-center text-slate-400 text-[10px]">
          Right Pane
        </div>
      </div>
    </div>
  );
};

// #068 Resize Handle (Corner grip ⌟ direct manipulation)
const LiveResizeHandleLab = () => {
  const [size, setSize] = useState({ w: 180, h: 100 });

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-2.5 font-mono text-xs">
      <div className="flex justify-between w-full">
        <span className="text-slate-300 font-bold">Direct Corner Grip:</span>
        <span className="text-emerald-400 font-bold">{size.w}px × {size.h}px</span>
      </div>
      <div className="w-full h-36 bg-slate-950 border border-slate-800 rounded-xl p-2 flex items-center justify-center relative overflow-hidden">
        <div
          style={{ width: `${size.w}px`, height: `${size.h}px` }}
          className="bg-indigo-950 border-2 border-indigo-400 rounded-xl p-2 relative shadow-2xl flex flex-col justify-between transition-all"
        >
          <span className="text-[10px] font-bold text-indigo-200">Sticky Note Box</span>
          <span className="text-[8px] text-slate-400">Corner grip below</span>

          {/* Corner Handle */}
          <div
            onClick={() => setSize((s) => ({ w: s.w === 180 ? 240 : 180, h: s.h === 100 ? 120 : 100 }))}
            className="absolute bottom-1 right-1 w-5 h-5 bg-indigo-600 hover:bg-indigo-400 text-white rounded flex items-center justify-center text-[10px] font-bold cursor-se-resize shadow"
          >
            ⌟
          </div>
        </div>
      </div>
    </div>
  );
};

// #069 Divider (Pure static 1px separator)
const LiveDividerLab = () => {
  const [vertical, setVertical] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Static Divider (1px Hairline):</span>
        <button
          onClick={() => setVertical(!vertical)}
          className="text-[10px] text-indigo-400 hover:underline"
        >
          {vertical ? 'Switch Horizontal' : 'Switch Vertical'}
        </button>
      </div>
      <div className="w-full p-4 bg-slate-950 border-2 border-slate-800 rounded-xl shadow-lg flex items-center justify-center min-h-[110px]">
        {vertical ? (
          <div className="flex items-center justify-around w-full">
            <span className="text-slate-400 text-[11px]">Primary Tools</span>
            <div className="w-px h-16 bg-indigo-500/70" />
            <span className="text-slate-400 text-[11px]">Auxiliary Tools</span>
          </div>
        ) : (
          <div className="flex flex-col gap-3 w-full">
            <span className="text-slate-400 text-[11px]">Group A: Electrical Limits</span>
            <div className="w-full h-px bg-indigo-500/70" />
            <span className="text-slate-400 text-[11px]">Group B: Safety Interlocks</span>
          </div>
        )}
      </div>
    </div>
  );
};

// #070 Section (Semantic H2/H3 document structure)
const LiveSectionLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Semantic Section Block:</span>
        <span className="text-indigo-400 text-[10px]">&lt;section&gt; Heading Unit</span>
      </div>
      <div className="p-3 bg-slate-950 border-2 border-indigo-500/80 rounded-xl flex flex-col gap-2 shadow-lg">
        <div className="border-b border-slate-800 pb-1.5">
          <h3 className="text-xs font-black text-indigo-300 flex items-center gap-1.5">
            <span>§</span>
            <span>Motion Controller Tuning</span>
          </h3>
          <p className="text-[9px] text-slate-500">Configure proportional gain & acceleration limits</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-slate-300">Kp: 2.45</div>
          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-slate-300">Ki: 0.12</div>
        </div>
      </div>
    </div>
  );
};

// #071 Card (Self-contained modular box with KPI)
const LiveCardLab = () => {
  const [elevated, setElevated] = useState(true);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Modular Card Unit:</span>
        <button
          onClick={() => setElevated(!elevated)}
          className="text-[10px] text-indigo-400 hover:underline"
        >
          {elevated ? 'Flat Border' : 'Elevate Shadow'}
        </button>
      </div>
      <div
        className={`w-full p-4 rounded-2xl border-2 transition-all ${
          elevated
            ? 'bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-600/30'
            : 'bg-slate-950 border-slate-800 shadow-none'
        }`}
      >
        <div className="flex justify-between items-center mb-1">
          <span className="text-[11px] font-bold text-slate-400">Total CNC Production</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
            ONLINE
          </span>
        </div>
        <div className="text-2xl font-black text-white my-1">1,480 pcs</div>
        <div className="text-[10px] text-indigo-400">99.2% Yield Rate in Shift #1</div>
      </div>
    </div>
  );
};

// #072 Grid Layout (2D CSS Grid column simulator)
const LiveGridLayoutLab = () => {
  const [cols, setCols] = useState<2 | 3 | 4>(3);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">2D CSS Grid (Rows × Cols):</span>
        <span className="text-indigo-400 font-bold">grid-cols-{cols}</span>
      </div>
      <div className="flex gap-1.5">
        {([2, 3, 4] as const).map((c) => (
          <button
            key={c}
            onClick={() => setCols(c)}
            className={`flex-1 py-1 rounded-lg text-xs font-bold transition ${
              cols === c ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'
            }`}
          >
            {c} Cols
          </button>
        ))}
      </div>
      <div
        className={`w-full p-2 bg-slate-950 border-2 border-indigo-500 rounded-xl grid gap-1.5 transition-all ${
          cols === 2 ? 'grid-cols-2' : cols === 3 ? 'grid-cols-3' : 'grid-cols-4'
        }`}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-indigo-950/80 border border-indigo-500/60 p-2 rounded-lg text-center text-[10px] font-bold text-indigo-200">
            Node #{i}
          </div>
        ))}
      </div>
    </div>
  );
};

// #073 Flex Layout (1D Flexbox justify distribution)
const LiveFlexLayoutLab = () => {
  const [justify, setJustify] = useState<'between' | 'center' | 'start' | 'end'>('between');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">1D Flexbox Distribution:</span>
        <span className="text-indigo-400 font-bold">justify-{justify}</span>
      </div>
      <div className="flex gap-1">
        {(['between', 'center', 'start', 'end'] as const).map((j) => (
          <button
            key={j}
            onClick={() => setJustify(j)}
            className={`flex-1 py-1 rounded-lg text-[10px] font-bold transition ${
              justify === j ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'
            }`}
          >
            {j}
          </button>
        ))}
      </div>
      <div
        className={`w-full h-20 p-2 bg-slate-950 border-2 border-indigo-500 rounded-xl flex items-center transition-all ${
          justify === 'between'
            ? 'justify-between'
            : justify === 'center'
            ? 'justify-center gap-2'
            : justify === 'start'
            ? 'justify-start gap-2'
            : 'justify-end gap-2'
        }`}
      >
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-xs">1</div>
        <div className="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center text-white font-black text-xs">2</div>
        <div className="w-10 h-10 bg-indigo-800 rounded-lg flex items-center justify-center text-white font-black text-xs">3</div>
      </div>
    </div>
  );
};

// #074 Stack Layout (Linear stack with configurable gap)
const LiveStackLayoutLab = () => {
  const [gap, setGap] = useState<1 | 2 | 3>(2);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Vertical Stack Gap:</span>
        <span className="text-indigo-400 font-bold">gap-{gap * 2} ({(gap * 8)}px)</span>
      </div>
      <div className="flex gap-1.5">
        {([1, 2, 3] as const).map((g) => (
          <button
            key={g}
            onClick={() => setGap(g)}
            className={`flex-1 py-1 rounded-lg text-xs font-bold transition ${
              gap === g ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'
            }`}
          >
            {g * 8}px Spacing
          </button>
        ))}
      </div>
      <div
        className={`w-full p-2 bg-slate-950 border-2 border-indigo-500 rounded-xl flex flex-col transition-all ${
          gap === 1 ? 'gap-1' : gap === 2 ? 'gap-2' : 'gap-3'
        }`}
      >
        <div className="p-2 bg-slate-900 rounded-lg text-slate-300 text-[10px]">Stack Layer #01 (Header Bar)</div>
        <div className="p-2 bg-slate-900 rounded-lg text-slate-300 text-[10px]">Stack Layer #02 (Form Inputs)</div>
        <div className="p-2 bg-slate-900 rounded-lg text-slate-300 text-[10px]">Stack Layer #03 (Action Buttons)</div>
      </div>
    </div>
  );
};

// #075 Masonry Layout (Staggered height interlocking bricks)
const LiveMasonryLayoutLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Masonry (Interlocking Bricks):</span>
        <span className="text-indigo-400 text-[10px]">Zero Void Gaps</span>
      </div>
      <div className="w-full flex gap-2 p-2 bg-slate-950 border-2 border-indigo-500 rounded-xl shadow-xl">
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-16 bg-indigo-950/80 border border-indigo-500/60 rounded-lg p-2 text-[10px] text-indigo-300 font-bold">
            Note #1 (Tall Card)
          </div>
          <div className="h-10 bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-[9px] text-slate-400">
            Note #3 (Short)
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-10 bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-[9px] text-slate-400">
            Note #2 (Short)
          </div>
          <div className="h-16 bg-indigo-950/80 border border-indigo-500/60 rounded-lg p-2 text-[10px] text-indigo-300 font-bold">
            Note #4 (Tall Card)
          </div>
        </div>
      </div>
    </div>
  );
};

// #076 Responsive Layout (Viewport simulation Desktop ➔ Tablet ➔ Mobile)
const LiveResponsiveLayoutLab = () => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Responsive Breakpoint Sim:</span>
        <span className="text-indigo-400 font-bold">{device.toUpperCase()}</span>
      </div>
      <div className="flex gap-1.5">
        {(['desktop', 'tablet', 'mobile'] as const).map((d) => (
          <button
            key={d}
            onClick={() => setDevice(d)}
            className={`flex-1 py-1 rounded-lg text-[10px] font-bold transition ${
              device === d ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'
            }`}
          >
            {d === 'desktop' ? '🖥 3-Col' : d === 'tablet' ? '📱 2-Col' : '📲 1-Col'}
          </button>
        ))}
      </div>
      <div
        className={`w-full p-2 bg-slate-950 border-2 border-indigo-500 rounded-xl grid gap-1.5 transition-all ${
          device === 'desktop' ? 'grid-cols-3' : device === 'tablet' ? 'grid-cols-2' : 'grid-cols-1'
        }`}
      >
        <div className="p-2 bg-slate-900 rounded text-center text-[10px] text-slate-200">Gantry X</div>
        <div className="p-2 bg-slate-900 rounded text-center text-[10px] text-slate-200">Gantry Y</div>
        <div className="p-2 bg-slate-900 rounded text-center text-[10px] text-slate-200">Gantry Z</div>
      </div>
    </div>
  );
};

// #077 Adaptive Layout (Structural paradigm shift Desktop vs Mobile)
const LiveAdaptiveLayoutLab = () => {
  const [mode, setMode] = useState<'table' | 'cards'>('table');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Adaptive Layout Template:</span>
        <button
          onClick={() => setMode((m) => (m === 'table' ? 'cards' : 'table'))}
          className="text-[10px] text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-500/40"
        >
          Switch to {mode === 'table' ? 'Card Stack' : 'Data Table'}
        </button>
      </div>
      <div className="p-2.5 bg-slate-950 border-2 border-indigo-500 rounded-xl">
        {mode === 'table' ? (
          <div className="space-y-1 text-[10px]">
            <div className="flex justify-between text-indigo-300 font-bold border-b border-slate-800 pb-1">
              <span>ID</span>
              <span>Servo Name</span>
              <span>Status</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>#01</span>
              <span>Axis X Primary</span>
              <span className="text-emerald-400">READY</span>
            </div>
          </div>
        ) : (
          <div className="p-2 bg-indigo-950/80 border border-indigo-400 rounded-lg text-[10px] space-y-1">
            <div className="font-bold text-indigo-200">Axis X Primary (#01)</div>
            <div className="text-emerald-400 font-bold">● Status: READY</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #078 Fluid Layout (100% full-width stretch)
const LiveFluidLayoutLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Fluid Canvas (100% Width):</span>
        <span className="text-indigo-400 text-[10px]">No Max-Width Ceiling</span>
      </div>
      <div className="w-full h-24 bg-indigo-950 border-2 border-indigo-400 rounded-xl p-3 flex flex-col justify-center items-center text-center shadow-xl">
        <span className="text-xs font-black text-indigo-200">Full 100% Fluid Width</span>
        <span className="text-[10px] text-indigo-400">Fills all available horizontal viewport pixels</span>
      </div>
    </div>
  );
};

// #079 Fixed Layout (1920x1080 exact pixel lock)
const LiveFixedLayoutLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-amber-400 font-bold">Fixed Layout (Pixel Lock):</span>
        <span className="text-slate-500 text-[10px]">1920×1080px Canvas</span>
      </div>
      <div className="w-full h-24 bg-slate-950 border-2 border-amber-500/80 rounded-xl p-2 overflow-x-auto flex items-center">
        <div className="w-96 bg-slate-900 border border-amber-400/60 p-2 rounded text-center shrink-0">
          <span className="text-[11px] font-bold text-amber-300">Exact 1920px HMI Touch Panel Interface</span>
          <div className="text-[9px] text-slate-500">Scroll horizontally if container is narrow ➔</div>
        </div>
      </div>
    </div>
  );
};

// #080 Aspect Ratio Box (Locked 16:9 / 4:3 frame)
const LiveAspectRatioBoxLab = () => {
  const [ratio, setRatio] = useState<'16:9' | '4:3' | '1:1'>('16:9');

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-2.5 font-mono text-xs">
      <div className="flex justify-between w-full">
        <span className="text-slate-300 font-bold">Locked Aspect Ratio:</span>
        <span className="text-indigo-400 font-bold">{ratio} Fixed</span>
      </div>
      <div className="flex gap-1.5 w-full">
        {(['16:9', '4:3', '1:1'] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRatio(r)}
            className={`flex-1 py-1 rounded-lg text-xs font-bold transition ${
              ratio === r ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'
            }`}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="w-full h-32 bg-slate-950 border-2 border-slate-800 rounded-xl flex items-center justify-center p-2">
        <div
          className={`bg-indigo-950 border-2 border-indigo-400 rounded-lg flex flex-col items-center justify-center text-center shadow-xl transition-all ${
            ratio === '16:9' ? 'w-48 h-28' : ratio === '4:3' ? 'w-36 h-28' : 'w-28 h-28'
          }`}
        >
          <span className="text-xs font-black text-indigo-200">{ratio} Frame</span>
          <span className="text-[8px] text-indigo-400">Proportions Preserved</span>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Category 05: Dedicated Scrolling, Positioning & Virtualization Labs (#081 ~ #100)
// -------------------------------------------------------------

// #081 Scrollbar (Track + Thumb anatomy)
const LiveScrollbarLab = () => {
  const [scrollPos, setScrollPos] = useState(25);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Scrollbar Anatomy:</span>
        <span className="text-indigo-400 font-bold">{scrollPos}% Offset</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={scrollPos}
        onChange={(e) => setScrollPos(Number(e.target.value))}
        className="accent-indigo-500"
      />
      <div className="w-full h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 flex items-center justify-between">
        <div className="space-y-1 text-[10px] text-slate-300">
          <div>• Track: Slate-900 Slot</div>
          <div>• Thumb: Indigo Interactive Handle</div>
        </div>
        <div className="w-3.5 h-full bg-slate-900 border border-slate-700 rounded-full p-0.5 relative">
          <div
            style={{ top: `${(scrollPos / 100) * 44}px` }}
            className="w-full h-7 bg-indigo-500 hover:bg-indigo-400 rounded-full shadow absolute transition-all"
          />
        </div>
      </div>
    </div>
  );
};

// #082 Vertical Scrollbar (Y-Axis discrete scroll)
const LiveVerticalScrollbarLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Vertical Scrollbar (Y-Axis):</span>
        <span className="text-indigo-400 text-[10px]">Scroll Down ↓</span>
      </div>
      <div className="w-full h-32 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 overflow-y-auto space-y-1.5 custom-scrollbar">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
          <div key={row} className="p-2 bg-slate-900 rounded border border-slate-800 flex justify-between items-center text-[10px]">
            <span className="text-slate-200">Servo Telemetry Row #{row}</span>
            <span className="text-emerald-400 font-bold">ACTIVE</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #083 Horizontal Scrollbar (X-Axis timeline scroll)
const LiveHorizontalScrollbarLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Horizontal Scrollbar (X-Axis):</span>
        <span className="text-indigo-400 text-[10px]">Scroll Right →</span>
      </div>
      <div className="w-full h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 overflow-x-auto flex gap-2 items-center">
        {[0, 5, 10, 15, 20, 25, 30, 35, 40].map((sec) => (
          <div key={sec} className="w-20 h-16 bg-slate-900 rounded border border-indigo-500/40 p-1.5 shrink-0 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-indigo-300">T+{sec}s</span>
            <span className="text-[8px] text-slate-400">Step pulse</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #084 Floating Scrollbar (Viewport bottom fixed scroller for wide tables)
const LiveFloatingScrollbarLab = () => {
  const [scrollX, setScrollX] = useState(0);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Floating Scrollbar (Pinned):</span>
        <span className="text-emerald-400 font-bold">Viewport Lock</span>
      </div>
      <div className="relative w-full h-32 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden p-2">
        <div
          style={{ transform: `translateX(-${scrollX}px)` }}
          className="flex gap-2 transition-transform duration-100"
        >
          {['ID', 'Name', 'RPM', 'Temp', 'Volts', 'Amps', 'Duty', 'Status', 'Firmware'].map((col) => (
            <div key={col} className="w-20 h-16 bg-slate-900 rounded border border-slate-800 p-2 shrink-0 text-center">
              <span className="text-[10px] font-bold text-indigo-300">{col}</span>
            </div>
          ))}
        </div>
        {/* Floating scrollbar at the bottom of the viewport */}
        <div className="absolute bottom-1 left-2 right-2 bg-slate-900/90 border border-indigo-400 rounded-lg p-1 flex items-center shadow-2xl">
          <input
            type="range"
            min={0}
            max={120}
            value={scrollX}
            onChange={(e) => setScrollX(Number(e.target.value))}
            className="w-full accent-indigo-500 h-1.5"
          />
        </div>
      </div>
    </div>
  );
};

// #085 Overlay Scrollbar (Zero layout shift on hover)
const LiveOverlayScrollbarLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Overlay Scrollbar (0px Width):</span>
        <span className="text-indigo-400 text-[10px]">No Layout Jump</span>
      </div>
      <div className="group relative w-full h-28 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2.5 overflow-hidden">
        <div className="w-full space-y-1 text-[10px] text-slate-300">
          <div>• Paragraph fills 100% width edge-to-edge</div>
          <div>• Scrollbar floats transparently above text</div>
          <div>• Zero jitter when scrollbar toggles</div>
        </div>
        <div className="absolute top-2 right-1.5 w-1.5 h-12 bg-indigo-500/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
      </div>
    </div>
  );
};

// #086 Scroll Container (Local overflow boundary)
const LiveScrollContainerLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Scroll Container (Boundary):</span>
        <span className="text-indigo-400 text-[10px]">overflow: auto</span>
      </div>
      <div className="w-full h-28 bg-slate-950 border-2 border-dashed border-indigo-500 rounded-xl p-2 overflow-y-auto space-y-1">
        <div className="text-[9px] text-indigo-300 font-bold">Autonomous Boundary</div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="p-1 bg-slate-900 rounded text-[9px] text-slate-400">
            Local item #{i} (Window doesn't scroll)
          </div>
        ))}
      </div>
    </div>
  );
};

// #087 Scrollable Pane (Split pane with independent scroll)
const LiveScrollablePaneLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Scrollable Pane:</span>
        <span className="text-indigo-400 text-[10px]">Fixed Toolbar + Body</span>
      </div>
      <div className="w-full h-32 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden">
        <div className="w-20 bg-slate-900 border-r border-slate-800 p-1.5 text-[9px] text-slate-500 flex flex-col justify-center text-center">
          Fixed Bar
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {[1, 2, 3, 4, 5, 6].map((k) => (
            <div key={k} className="p-1 bg-indigo-950/60 border border-indigo-500/30 rounded text-[9px] text-indigo-200">
              Param #{k}: Auto-Tuned
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #088 Viewport (Infinite plane vs visible frame)
const LiveViewportLab = () => {
  const [framePos, setFramePos] = useState(30);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Viewport Frame vs Canvas:</span>
        <span className="text-emerald-400 font-bold">{framePos}% Window</span>
      </div>
      <input
        type="range"
        min={0}
        max={60}
        value={framePos}
        onChange={(e) => setFramePos(Number(e.target.value))}
        className="accent-indigo-500"
      />
      <div className="w-full h-24 bg-slate-950 border-2 border-slate-800 rounded-xl p-1 relative overflow-hidden flex items-center">
        <div className="absolute inset-x-2 text-[8px] text-slate-600 flex justify-between">
          <span>0px</span><span>2500px</span><span>5000px</span><span>10000px Plane</span>
        </div>
        <div
          style={{ left: `${framePos}%` }}
          className="absolute w-28 h-16 bg-indigo-950/90 border-2 border-indigo-400 rounded-lg p-1.5 flex flex-col justify-center items-center text-center shadow-2xl transition-all"
        >
          <span className="text-[10px] font-bold text-indigo-200">Viewport (1920)</span>
          <span className="text-[8px] text-emerald-400">Visible Segment</span>
        </div>
      </div>
    </div>
  );
};

// #089 Overflow (Visible vs Hidden vs Scroll vs Auto)
const LiveOverflowLab = () => {
  const [overflowType, setOverflowType] = useState<'hidden' | 'auto' | 'scroll'>('hidden');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Overflow Behavior:</span>
        <span className="text-indigo-400 font-bold">overflow-{overflowType}</span>
      </div>
      <div className="flex gap-1.5">
        {(['hidden', 'auto', 'scroll'] as const).map((ot) => (
          <button
            key={ot}
            onClick={() => setOverflowType(ot)}
            className={`flex-1 py-1 rounded-lg text-xs font-bold transition ${
              overflowType === ot ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'
            }`}
          >
            {ot}
          </button>
        ))}
      </div>
      <div
        className={`w-full h-20 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 transition-all ${
          overflowType === 'hidden'
            ? 'overflow-hidden'
            : overflowType === 'auto'
            ? 'overflow-auto'
            : 'overflow-scroll'
        }`}
      >
        <div className="w-80 text-[10px] text-indigo-200">
          This is an intentionally wide telemetry log string with 32 parameters exceeding the parent width limit to demonstrate CSS overflow clipping and scrolling!
        </div>
      </div>
    </div>
  );
};

// #090 Sticky Element (Flows then docks at top boundary)
const LiveStickyElementLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Sticky Element (top: 0):</span>
        <span className="text-indigo-400 text-[10px]">Scroll List ↓</span>
      </div>
      <div className="w-full h-32 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-y-auto relative">
        <div className="p-2 text-[9px] text-slate-500">Document Intro Header</div>
        <div className="sticky top-0 bg-indigo-600 text-white px-3 py-1.5 text-[10px] font-bold shadow-lg z-10 flex justify-between">
          <span>📌 DOCKED STICKY BAR</span>
          <span>top: 0</span>
        </div>
        <div className="p-2 space-y-1.5 text-[10px] text-slate-300">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-1 bg-slate-900 rounded">Content Row #{i}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #091 Sticky Header (Fixed table column titles)
const LiveStickyHeaderLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Sticky Header (Table):</span>
        <span className="text-indigo-400 text-[10px]">Header Never Scrolls Away</span>
      </div>
      <div className="w-full h-32 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-y-auto">
        <div className="sticky top-0 bg-slate-900 border-b-2 border-indigo-500 px-3 py-1.5 text-[10px] font-black text-indigo-300 flex justify-between z-10 shadow-md">
          <span>SERVO ID</span>
          <span>POSITION</span>
          <span>STATUS</span>
        </div>
        <div className="p-2 space-y-1 text-[10px]">
          {[1, 2, 3, 4, 5, 6, 7].map((s) => (
            <div key={s} className="flex justify-between text-slate-300 border-b border-slate-900 pb-0.5">
              <span>Axis #{s}</span>
              <span>{(s * 12.4).toFixed(1)} mm</span>
              <span className="text-emerald-400">LOCKED</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #092 Sticky Column (Pinned 1st column during horizontal scroll)
const LiveStickyColumnLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Sticky 1st Column:</span>
        <span className="text-indigo-400 text-[10px]">Scroll Right →</span>
      </div>
      <div className="w-full h-28 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-x-auto flex">
        <div className="sticky left-0 bg-slate-900 border-r-2 border-indigo-500 p-2 z-10 text-[10px] font-bold text-indigo-300 shadow-xl shrink-0">
          Pinned Machine Name
        </div>
        <div className="p-2 flex gap-4 text-[10px] text-slate-300 shrink-0">
          <div>RPM: 12000</div>
          <div>Duty: 85%</div>
          <div>Volts: 220V</div>
          <div>Amps: 14A</div>
          <div>Temp: 42°C</div>
        </div>
      </div>
    </div>
  );
};

// #093 Fixed Element (Viewport absolute coordinate lock)
const LiveFixedElementLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Fixed Element (Absolute):</span>
        <span className="text-indigo-400 text-[10px]">Fixed Position</span>
      </div>
      <div className="relative w-full h-28 bg-slate-950 border-2 border-slate-800 rounded-xl overflow-y-auto p-2">
        <div className="text-[9px] text-slate-500 space-y-1">
          <div>Scrolling background document line 1</div>
          <div>Scrolling background document line 2</div>
          <div>Scrolling background document line 3</div>
        </div>
        <div className="absolute top-2 right-2 px-2.5 py-1 bg-indigo-600 text-white rounded-lg text-[10px] font-bold shadow-2xl border border-indigo-400">
          Fixed Badge
        </div>
      </div>
    </div>
  );
};

// #094 Floating Element (Elevated floating quick toolbar)
const LiveFloatingElementLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Floating Mini-Toolbar:</span>
        <span className="text-indigo-400 text-[10px]">Z-Index Elevation</span>
      </div>
      <div className="relative w-full h-28 bg-slate-950 border-2 border-slate-800 rounded-xl p-3 flex items-center justify-center">
        <div className="w-56 bg-slate-900 border-2 border-indigo-400 rounded-xl p-2 shadow-2xl flex items-center justify-around text-xs font-bold text-slate-200">
          <button className="hover:text-indigo-400">✂ Cut</button>
          <button className="hover:text-indigo-400">📄 Copy</button>
          <button className="text-indigo-400">⚡ Run</button>
        </div>
      </div>
    </div>
  );
};

// #095 Overlay (Full backdrop dimming layer)
const LiveOverlayLab = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Drop Overlay Mask:</span>
        <button
          onClick={() => setActive(!active)}
          className="text-[10px] text-indigo-400 hover:underline"
        >
          {active ? 'Hide Mask' : 'Show Overlay'}
        </button>
      </div>
      <div className="relative w-full h-28 bg-slate-900 rounded-xl overflow-hidden border-2 border-indigo-500 flex items-center justify-center">
        <span className="text-slate-500 text-[10px]">Underlying CAD Drawing View</span>
        {active && (
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs flex flex-col items-center justify-center text-center p-2">
            <span className="text-xs font-black text-indigo-300">📁 DRAG & DROP STEP FILE</span>
            <span className="text-[9px] text-slate-400">Upload overlay active</span>
          </div>
        )}
      </div>
    </div>
  );
};

// #096 Scroll Snap (Magnet alignment to nearest card)
const LiveScrollSnapLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Scroll Snap (Magnetic):</span>
        <span className="text-emerald-400 font-bold">snap-x mandatory</span>
      </div>
      <div className="w-full h-28 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 flex gap-3 overflow-x-auto snap-x snap-mandatory">
        {[1, 2, 3, 4].map((c) => (
          <div
            key={c}
            className="w-48 h-full bg-indigo-950 border-2 border-indigo-400 rounded-xl p-2 shrink-0 snap-center flex flex-col justify-center items-center text-center shadow-lg"
          >
            <span className="text-xs font-bold text-white">Machine Step #{c}</span>
            <span className="text-[9px] text-emerald-300">Snaps to Center</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #097 Infinite Scroll (Automatic pagination feed)
const LiveInfiniteScrollLab = () => {
  const [items, setItems] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setItems((prev) => [...prev, prev.length + 1, prev.length + 2]);
      setLoading(false);
    }, 400);
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Infinite Scroll Feed:</span>
        <span className="text-indigo-400 font-bold">{items.length} Items Loaded</span>
      </div>
      <div
        onScroll={(e) => {
          const target = e.currentTarget;
          if (target.scrollHeight - target.scrollTop <= target.clientHeight + 5 && !loading) {
            loadMore();
          }
        }}
        className="w-full h-32 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 overflow-y-auto space-y-1.5"
      >
        {items.map((i) => (
          <div key={i} className="p-2 bg-slate-900 rounded border border-slate-800 text-[10px] text-slate-200">
            Log Record #{i} (Telemetry Chunk)
          </div>
        ))}
        {loading && (
          <div className="p-1 bg-indigo-950 text-indigo-300 text-center rounded text-[9px] animate-pulse">
            Loading next items...
          </div>
        )}
      </div>
    </div>
  );
};

// #098 Virtual Scroll (100k records rendered as 4 DOM nodes)
const LiveVirtualScrollLab = () => {
  const [scrollIndex, setScrollIndex] = useState(5000);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Virtualization (100k rows):</span>
        <span className="text-emerald-400 font-bold">DOM Count: 4</span>
      </div>
      <input
        type="range"
        min={0}
        max={99990}
        value={scrollIndex}
        onChange={(e) => setScrollIndex(Number(e.target.value))}
        className="accent-indigo-500"
      />
      <div className="w-full h-28 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 space-y-1 shadow-lg">
        {[0, 1, 2, 3].map((offset) => (
          <div key={offset} className="p-1.5 bg-slate-900 rounded border border-indigo-500/40 flex justify-between text-[10px]">
            <span className="text-indigo-300 font-bold">Row #{scrollIndex + offset}</span>
            <span className="text-slate-400">Calculated Pixel Offset</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #099 Scroll Shadow (Subtle edge gradient hint)
const LiveScrollShadowLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Scroll Shadow Hint:</span>
        <span className="text-indigo-400 text-[10px]">Gradient Visual Cue</span>
      </div>
      <div className="relative w-full h-28 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 overflow-y-auto">
        <div className="space-y-1 text-[10px] text-slate-300">
          <div>Item 1: Gantry X Configuration</div>
          <div>Item 2: Gantry Y Configuration</div>
          <div>Item 3: Gantry Z Configuration</div>
          <div>Item 4: Rotary Axis A</div>
          <div>Item 5: Rotary Axis B</div>
        </div>
        {/* Bottom shadow overlay */}
        <div className="sticky bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-indigo-950 to-transparent pointer-events-none flex items-end justify-center pb-0.5">
          <span className="text-[8px] text-indigo-300 font-bold">▼ Scroll for more</span>
        </div>
      </div>
    </div>
  );
};

// #100 Auto Scroll (Edge proximity translation)
const LiveAutoScrollLab = () => {
  const [edgePos, setEdgePos] = useState(30);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Edge Auto-Scroll:</span>
        <span className={edgePos > 70 ? 'text-emerald-400 font-bold animate-pulse' : 'text-slate-400'}>
          {edgePos > 70 ? '⚡ AUTO-SCROLLING RIGHT' : 'Drag icon to right edge'}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={90}
        value={edgePos}
        onChange={(e) => setEdgePos(Number(e.target.value))}
        className="accent-indigo-500"
      />
      <div className="w-full h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 relative overflow-hidden flex items-center">
        <div
          style={{ left: `${edgePos}%` }}
          className="absolute w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-xl transition-all"
        >
          📦
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-indigo-500/20 border-l border-indigo-400/40 flex items-center justify-center text-[8px] text-indigo-300 font-bold">
          EDGE
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Category 06: Dedicated Tables & Data Grids Labs (#101 ~ #120)
// -------------------------------------------------------------

// #101 Table (Basic 2D Static Grid)
const LiveBasicTableLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Semantic HTML Table:</span>
        <span className="text-indigo-400 font-bold">Static 2D Grid</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 border-b border-indigo-500/60 text-[10px] text-indigo-300">
              <th className="p-2">Part ID</th>
              <th className="p-2">Type</th>
              <th className="p-2 text-right">Qty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900 text-[10px] text-slate-300">
            <tr><td className="p-2 font-bold text-slate-200">MTR-750</td><td className="p-2">Servo Motor</td><td className="p-2 text-right">4</td></tr>
            <tr><td className="p-2 font-bold text-slate-200">ENC-24B</td><td className="p-2">Optical Enc</td><td className="p-2 text-right">8</td></tr>
            <tr><td className="p-2 font-bold text-slate-200">PLC-FX5</td><td className="p-2">Controller</td><td className="p-2 text-right">2</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// #102 Data Table (Sortable, Searchable & Paginated Table)
const LiveDataTableLab = () => {
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);

  const rawData = [
    { id: 'AX-01', rpm: 4200, status: 'RUNNING' },
    { id: 'AX-02', rpm: 3100, status: 'IDLE' },
    { id: 'AX-03', rpm: 5000, status: 'RUNNING' },
    { id: 'AX-04', rpm: 1800, status: 'FAULT' },
    { id: 'AX-05', rpm: 3900, status: 'RUNNING' },
  ];

  const filtered = rawData
    .filter((d) => d.id.toLowerCase().includes(search.toLowerCase()) || d.status.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sortAsc ? a.rpm - b.rpm : b.rpm - a.rpm));

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Data Table:</span>
        <span className="text-indigo-400 font-bold">Filter + Sort + Page</span>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Filter (e.g. AX, RUNNING)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-slate-900 border border-indigo-500/60 rounded-lg px-2.5 py-1 text-slate-200 text-xs focus:outline-none focus:border-indigo-400"
        />
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-2 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-[10px] font-bold"
        >
          RPM {sortAsc ? '▲ ASC' : '▼ DESC'}
        </button>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-left text-[10px]">
          <thead>
            <tr className="bg-slate-900 border-b border-indigo-500 text-indigo-300">
              <th className="p-2">Axis ID</th>
              <th className="p-2 text-right">RPM</th>
              <th className="p-2 text-right">State</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900 text-slate-300">
            {filtered.map((r) => (
              <tr key={r.id}>
                <td className="p-2 font-bold text-slate-200">{r.id}</td>
                <td className="p-2 text-right font-mono text-indigo-300">{r.rpm}</td>
                <td className={`p-2 text-right font-bold ${r.status === 'RUNNING' ? 'text-emerald-400' : r.status === 'FAULT' ? 'text-rose-400' : 'text-amber-400'}`}>
                  {r.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-slate-900 border-t border-slate-800 px-3 py-1 flex justify-between items-center text-[9px] text-slate-400">
          <span>Page {page} of 3</span>
          <div className="flex gap-1">
            <button onClick={() => setPage(Math.max(1, page - 1))} className="px-1.5 py-0.5 bg-slate-800 hover:bg-slate-700 rounded">&lt;</button>
            <button onClick={() => setPage(Math.min(3, page + 1))} className="px-1.5 py-0.5 bg-slate-800 hover:bg-slate-700 rounded">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// #103 Data Grid (Excel-like editable spreadsheet grid)
const LiveDataGridLab = () => {
  const [cells, setCells] = useState({
    r1c1: 'Axis X', r1c2: '750W', r1c3: '220V',
    r2c1: 'Axis Y', r2c2: '400W', r2c3: '220V',
    r3c1: 'Axis Z', r3c2: '1200W', r3c3: '380V',
  });

  const updateCell = (k: keyof typeof cells, val: string) => {
    setCells((prev) => ({ ...prev, [k]: val }));
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Data Grid:</span>
        <span className="text-emerald-400 font-bold">Inline Cell Input</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-1.5 shadow-xl">
        <div className="grid grid-cols-3 gap-1 mb-1 text-[10px] font-bold text-indigo-300 bg-slate-900 p-1.5 rounded text-center">
          <div>A | Motion Axis</div>
          <div>B | Motor Spec</div>
          <div>C | Voltage</div>
        </div>
        <div className="space-y-1">
          {(['1', '2', '3'] as const).map((r) => (
            <div key={r} className="grid grid-cols-3 gap-1">
              {(['c1', 'c2', 'c3'] as const).map((c) => {
                const key = `r${r}${c}` as keyof typeof cells;
                return (
                  <input
                    key={key}
                    type="text"
                    value={cells[key]}
                    onChange={(e) => updateCell(key, e.target.value)}
                    className="bg-slate-900 border border-slate-700 focus:border-emerald-400 focus:bg-indigo-950 text-slate-200 rounded px-1.5 py-1 text-[10px] text-center font-mono focus:outline-none transition"
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #104 Tree View (Hierarchical expandable folder tree)
const LiveTreeViewLab = () => {
  const [openNodes, setOpenNodes] = useState<Record<string, boolean>>({
    factory: true,
    lineA: true,
  });

  const toggle = (node: string) => {
    setOpenNodes((prev) => ({ ...prev, [node]: !prev[node] }));
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Hierarchical Tree View:</span>
        <span className="text-indigo-400 font-bold">Collapse / Expand</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-lg space-y-1.5 text-[11px]">
        <div>
          <button onClick={() => toggle('factory')} className="text-indigo-300 font-bold hover:text-white flex items-center gap-1.5">
            <span>{openNodes.factory ? '▼' : '▶'}</span>
            <span>🏭 Factory #1 (Main Complex)</span>
          </button>
          {openNodes.factory && (
            <div className="pl-4 mt-1.5 space-y-1.5 border-l-2 border-slate-800">
              <div>
                <button onClick={() => toggle('lineA')} className="text-slate-300 font-bold hover:text-white flex items-center gap-1.5">
                  <span>{openNodes.lineA ? '▼' : '▶'}</span>
                  <span>⚙ Production Line A</span>
                </button>
                {openNodes.lineA && (
                  <div className="pl-4 mt-1 space-y-1 border-l-2 border-indigo-500/40 text-[10px] text-slate-400">
                    <div className="hover:text-emerald-400 cursor-pointer">• CNC Milling Machine #01</div>
                    <div className="hover:text-emerald-400 cursor-pointer">• 6-Axis Robotic Arm #04</div>
                  </div>
                )}
              </div>
              <div className="text-slate-500 flex items-center gap-1.5">
                <span>▶</span> <span>⚙ Production Line B (Offline)</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// #105 Tree Grid (Hierarchical tree + aligned multi-columns)
const LiveTreeGridLab = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Tree Grid (BOM Assembly):</span>
        <span className="text-indigo-400 font-bold">Tree + Multi-Col</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-slate-900 border-b border-indigo-500 px-3 py-1.5 flex justify-between text-[10px] font-bold text-indigo-300">
          <span className="w-44">Assembly Structure</span>
          <span className="w-12 text-center">Qty</span>
          <span className="w-16 text-right">Power</span>
        </div>
        <div className="p-2 space-y-1 text-[10px]">
          <div
            onClick={() => setExpanded(!expanded)}
            className="flex justify-between items-center bg-indigo-950/60 hover:bg-indigo-900/60 p-1 rounded cursor-pointer text-indigo-200 font-bold"
          >
            <span className="w-44 flex items-center gap-1">
              <span>{expanded ? '▼' : '▶'}</span> 📁 Gantry Robot Assembly
            </span>
            <span className="w-12 text-center text-slate-300">1</span>
            <span className="w-16 text-right text-emerald-400">4.5 kW</span>
          </div>
          {expanded && (
            <div className="pl-3 space-y-1 border-l-2 border-indigo-500/40 text-slate-300 text-[9px]">
              <div className="flex justify-between items-center p-0.5">
                <span className="w-44">• Axis X Servo Motor</span>
                <span className="w-12 text-center">1</span>
                <span className="w-16 text-right">1.5 kW</span>
              </div>
              <div className="flex justify-between items-center p-0.5">
                <span className="w-44">• Axis Y Servo Motor</span>
                <span className="w-12 text-center">2</span>
                <span className="w-16 text-right">1.5 kW</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// #106 Row (Single Horizontal Record highlight)
const LiveRowLab = () => {
  const [selectedRow, setSelectedRow] = useState(2);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Table Row (Record Unit):</span>
        <span className="text-emerald-400 font-bold">Selected: Row #{selectedRow}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 space-y-1.5 shadow-lg">
        {[1, 2, 3].map((r) => (
          <div
            key={r}
            onClick={() => setSelectedRow(r)}
            className={`p-2 rounded-lg border flex justify-between items-center cursor-pointer transition-all ${
              selectedRow === r
                ? 'bg-indigo-600 border-indigo-300 text-white shadow-lg'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
            }`}
          >
            <span className="font-bold text-[10px]">Machine Unit Record #{r}</span>
            <span className="text-[9px] font-mono">{selectedRow === r ? 'ACTIVE SELECTION' : 'Click to select'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #107 Column (Single Vertical Attribute highlight)
const LiveColumnLab = () => {
  const [selectedCol, setSelectedCol] = useState<'A' | 'B' | 'C'>('B');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Table Column (Attribute Unit):</span>
        <span className="text-indigo-400 font-bold">Active: Column {selectedCol}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 flex gap-1.5 shadow-lg">
        {(['A', 'B', 'C'] as const).map((col) => (
          <div
            key={col}
            onClick={() => setSelectedCol(col)}
            className={`flex-1 p-2 rounded-lg border flex flex-col items-center gap-1.5 cursor-pointer transition ${
              selectedCol === col
                ? 'bg-indigo-950 border-indigo-400 text-indigo-200 shadow-xl'
                : 'bg-slate-900 border-slate-800 text-slate-500 hover:bg-slate-850'
            }`}
          >
            <span className="text-[10px] font-black">Col {col}</span>
            <div className="w-full space-y-1 text-[9px] text-center">
              <div className="bg-slate-800/80 p-0.5 rounded">Val 1</div>
              <div className="bg-slate-800/80 p-0.5 rounded">Val 2</div>
              <div className="bg-slate-800/80 p-0.5 rounded">Val 3</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// #108 Cell (Single atomic intersection unit)
const LiveCellLab = () => {
  const [val, setVal] = useState('4,500 RPM');
  const [editing, setEditing] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Atomic Cell Intersection:</span>
        <span className="text-emerald-400 font-bold">{editing ? 'Editing Mode' : 'Click to Edit'}</span>
      </div>
      <div className="w-full h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 flex items-center justify-center shadow-lg">
        {editing ? (
          <input
            type="text"
            value={val}
            autoFocus
            onChange={(e) => setVal(e.target.value)}
            onBlur={() => setEditing(false)}
            onKeyDown={(e) => e.key === 'Enter' && setEditing(false)}
            className="w-44 bg-indigo-950 border-2 border-emerald-400 text-white font-black text-center py-1.5 rounded-lg text-xs focus:outline-none shadow-2xl"
          />
        ) : (
          <div
            onClick={() => setEditing(true)}
            className="w-44 bg-slate-900 border-2 border-indigo-400 hover:border-emerald-400 text-white font-bold text-center py-1.5 rounded-lg text-xs cursor-pointer shadow-lg transition"
          >
            {val}
          </div>
        )}
      </div>
    </div>
  );
};

// #109 Column Header (Sort & filter trigger anchor)
const LiveColumnHeaderLab = () => {
  const [sortOrder, setSortOrder] = useState<'NONE' | 'ASC' | 'DESC'>('ASC');

  const cycle = () => {
    if (sortOrder === 'NONE') setSortOrder('ASC');
    else if (sortOrder === 'ASC') setSortOrder('DESC');
    else setSortOrder('NONE');
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Column Header (Interactive):</span>
        <span className="text-indigo-400 font-bold">Sort: {sortOrder}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 flex flex-col gap-2 shadow-lg">
        <button
          onClick={cycle}
          className="w-full bg-slate-900 hover:bg-slate-850 border-2 border-indigo-400 rounded-lg p-2 flex justify-between items-center text-white font-bold transition shadow-md"
        >
          <span>Current Torque (Nm)</span>
          <span className="bg-indigo-600 px-2 py-0.5 rounded text-[10px] text-white">
            {sortOrder === 'ASC' ? '▲ ASC' : sortOrder === 'DESC' ? '▼ DESC' : '↕ NONE'}
          </span>
        </button>
        <span className="text-[9px] text-slate-400 text-center">Click header to toggle sort direction</span>
      </div>
    </div>
  );
};

// #110 Row Header (Line numbers + multi-select checkboxes)
const LiveRowHeaderLab = () => {
  const [checked, setChecked] = useState([true, false, true]);

  const toggle = (idx: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Row Header (Select & Index):</span>
        <span className="text-indigo-400 font-bold">{checked.filter(Boolean).length} Selected</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-lg flex">
        <div className="w-14 bg-slate-900 border-r-2 border-indigo-500 p-2 flex flex-col gap-2 text-center text-[10px] font-bold text-indigo-300">
          {[0, 1, 2].map((idx) => (
            <div key={idx} onClick={() => toggle(idx)} className="cursor-pointer hover:text-white flex items-center justify-center gap-1">
              <span>{checked[idx] ? '☑' : '☐'}</span>
              <span>0{idx + 1}</span>
            </div>
          ))}
        </div>
        <div className="flex-1 p-2 space-y-2 text-[10px] text-slate-300">
          <div className="p-0.5">Laser Emitter Module #1</div>
          <div className="p-0.5">Hydraulic Valve Assembly #2</div>
          <div className="p-0.5">Pneumatic Gripper Unit #3</div>
        </div>
      </div>
    </div>
  );
};

// #111 Frozen Row (Pinned summary or header row on scroll)
const LiveFrozenRowLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Frozen Row (Pinned Header & Total):</span>
        <span className="text-emerald-400 font-bold">Sticky Row 1</span>
      </div>
      <div className="w-full h-32 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-y-auto relative shadow-lg">
        <div className="sticky top-0 bg-indigo-600 text-white font-black text-[10px] px-3 py-1.5 shadow-md flex justify-between z-10">
          <span>📌 PINNED HEADER ROW</span>
          <span>Never Scrolls</span>
        </div>
        <div className="p-2 space-y-1.5 text-[10px] text-slate-300">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="p-1 bg-slate-900 rounded flex justify-between">
              <span>Machine Record #{i}</span>
              <span className="text-slate-500">220V</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #112 Frozen Column (Pinned 1st column on horizontal scroll)
const LiveFrozenColumnLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Frozen Column (Pinned 1st Col):</span>
        <span className="text-indigo-400 font-bold">Scroll Right →</span>
      </div>
      <div className="w-full h-28 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-x-auto flex shadow-lg">
        <div className="sticky left-0 bg-slate-900 border-r-2 border-indigo-500 p-2.5 z-10 shrink-0 flex flex-col justify-center text-[10px] font-bold text-indigo-300 shadow-2xl">
          📌 Pinned Unit ID
        </div>
        <div className="p-2 flex gap-4 text-[10px] text-slate-300 shrink-0 items-center">
          <div className="w-20 bg-slate-900 p-2 rounded">RPM: 4800</div>
          <div className="w-20 bg-slate-900 p-2 rounded">Volt: 220V</div>
          <div className="w-20 bg-slate-900 p-2 rounded">Temp: 48°C</div>
          <div className="w-20 bg-slate-900 p-2 rounded">Duty: 88%</div>
        </div>
      </div>
    </div>
  );
};

// #113 Sortable Column (Toggle ▲/▼ sort)
const LiveSortableColumnLab = () => {
  const [data, setData] = useState([
    { name: 'Rotary Table', price: 1200 },
    { name: 'Linear Slide', price: 450 },
    { name: 'Gripper Jaw', price: 890 },
  ]);
  const [asc, setAsc] = useState(true);

  const toggleSort = () => {
    const nextAsc = !asc;
    setAsc(nextAsc);
    setData((prev) => [...prev].sort((a, b) => (nextAsc ? a.price - b.price : b.price - a.price)));
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Sortable Column Header:</span>
        <span className="text-indigo-400 font-bold">{asc ? 'Price ▲ Low-High' : 'Price ▼ High-Low'}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-slate-900 border-b border-indigo-500 px-3 py-1.5 flex justify-between items-center text-[10px] font-bold text-indigo-300">
          <span>Component Name</span>
          <button onClick={toggleSort} className="bg-indigo-600 hover:bg-indigo-500 text-white px-2 py-0.5 rounded transition">
            Price {asc ? '▲' : '▼'}
          </button>
        </div>
        <div className="p-2 space-y-1 text-[10px] text-slate-300">
          {data.map((item) => (
            <div key={item.name} className="flex justify-between p-1 bg-slate-900 rounded">
              <span>{item.name}</span>
              <span className="font-bold text-emerald-400">${item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #114 Filterable Column (Popup dropdown checkbox filter)
const LiveFilterableColumnLab = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState<'All' | 'Siemens' | 'Mitsubishi'>('All');

  const items = [
    { name: 'PLC CPU 1511', vendor: 'Siemens' },
    { name: 'Servo Amp MR-J4', vendor: 'Mitsubishi' },
    { name: 'Touch HMI KTP700', vendor: 'Siemens' },
  ];

  const filtered = selectedVendor === 'All' ? items : items.filter((i) => i.vendor === selectedVendor);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Filterable Column:</span>
        <span className="text-indigo-400 font-bold">Vendor: {selectedVendor}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 relative shadow-lg">
        <div className="flex justify-between items-center bg-slate-900 p-1.5 rounded border border-slate-800 text-[10px] font-bold text-indigo-300">
          <span>Model Name</span>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-2 py-0.5 rounded flex items-center gap-1"
          >
            <span>⚲ Vendor</span>
            <span>▼</span>
          </button>
        </div>
        {filterOpen && (
          <div className="absolute right-3 top-10 bg-slate-900 border-2 border-indigo-400 rounded-lg p-2 z-20 shadow-2xl space-y-1 text-[10px]">
            {(['All', 'Siemens', 'Mitsubishi'] as const).map((v) => (
              <div
                key={v}
                onClick={() => {
                  setSelectedVendor(v);
                  setFilterOpen(false);
                }}
                className={`cursor-pointer px-2 py-1 rounded ${selectedVendor === v ? 'bg-indigo-600 text-white font-bold' : 'text-slate-300 hover:bg-slate-800'}`}
              >
                {v}
              </div>
            ))}
          </div>
        )}
        <div className="mt-2 space-y-1 text-[10px] text-slate-300">
          {filtered.map((item) => (
            <div key={item.name} className="flex justify-between p-1 bg-slate-900 rounded">
              <span>{item.name}</span>
              <span className="text-indigo-400 font-bold">{item.vendor}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #115 Column Resizing (Drag handle to expand column width)
const LiveColumnResizingLab = () => {
  const [colWidth, setColWidth] = useState(140);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Column Resizing (Drag Handle):</span>
        <span className="text-emerald-400 font-bold">{colWidth}px Width</span>
      </div>
      <input
        type="range"
        min={90}
        max={220}
        value={colWidth}
        onChange={(e) => setColWidth(Number(e.target.value))}
        className="accent-indigo-500"
      />
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-lg flex">
        <div style={{ width: `${colWidth}px` }} className="bg-slate-900 border-r-2 border-indigo-400 p-2 shrink-0">
          <div className="text-[10px] font-black text-indigo-300 truncate">Long Component Identifier Name</div>
          <div className="text-[9px] text-slate-400 mt-1 truncate">MTR-750-OPTICAL-24B-AXIS</div>
        </div>
        <div className="flex-1 p-2 bg-slate-950 text-[10px] text-slate-400 flex items-center justify-center">
          Rest of Grid
        </div>
      </div>
    </div>
  );
};

// #116 Column Reordering (Swap column positions)
const LiveColumnReorderingLab = () => {
  const [columns, setColumns] = useState(['Col A: Spec', 'Col B: Qty', 'Col C: Price']);

  const swap = (idx: number) => {
    if (idx < columns.length - 1) {
      setColumns((prev) => {
        const next = [...prev];
        const temp = next[idx];
        next[idx] = next[idx + 1];
        next[idx + 1] = temp;
        return next;
      });
    }
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Column Reordering:</span>
        <span className="text-indigo-400 font-bold">Click to Shift Right ➔</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 flex gap-1.5 shadow-lg">
        {columns.map((c, idx) => (
          <button
            key={c}
            onClick={() => swap(idx)}
            className="flex-1 p-2 bg-slate-900 hover:bg-indigo-950 border border-indigo-400/60 rounded-lg text-center text-[9px] font-bold text-indigo-200 shadow transition"
          >
            <div>{c}</div>
            <div className="text-[8px] text-emerald-400 mt-1">{idx < columns.length - 1 ? '➔ Move' : 'Last'}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

// #117 Row Reordering (Drag and drop row sequence swap)
const LiveRowReorderingLab = () => {
  const [tasks, setTasks] = useState(['Step 1: Calibration', 'Step 2: Laser Cutting', 'Step 3: Deburring']);

  const moveUp = (idx: number) => {
    if (idx > 0) {
      setTasks((prev) => {
        const next = [...prev];
        const temp = next[idx];
        next[idx] = next[idx - 1];
        next[idx - 1] = temp;
        return next;
      });
    }
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Row Reordering (Sequence):</span>
        <span className="text-indigo-400 font-bold">Reorder Priority</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 space-y-1.5 shadow-lg">
        {tasks.map((task, idx) => (
          <div key={task} className="flex justify-between items-center p-2 bg-slate-900 border border-slate-800 rounded-lg text-[10px] text-slate-200">
            <span className="flex items-center gap-2">
              <span className="text-slate-500">⠿</span>
              <span>{task}</span>
            </span>
            {idx > 0 && (
              <button
                onClick={() => moveUp(idx)}
                className="px-2 py-0.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[8px] font-bold"
              >
                ▲ Up
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// #118 Inline Editing (Direct cell typing with immediate commit)
const LiveInlineEditingLab = () => {
  const [val, setVal] = useState('Siemens S7-1500');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Inline Cell Editing:</span>
        <span className="text-emerald-400 font-bold">No Modal Dialog</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 space-y-2 shadow-lg">
        <label className="text-[10px] text-slate-400">Directly edit controller model in-grid:</label>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-full bg-slate-900 border-2 border-emerald-400 focus:bg-indigo-950 text-white font-bold px-3 py-1.5 rounded-lg text-xs focus:outline-none shadow-xl"
        />
        <div className="text-[9px] text-emerald-300 font-bold">✓ Changes saved directly into memory buffer</div>
      </div>
    </div>
  );
};

// #119 Expandable Row (Accordion sub-detail panel)
const LiveExpandableRowLab = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Expandable Row (Details):</span>
        <span className="text-indigo-400 font-bold">{expanded ? 'Expanded' : 'Collapsed'}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-lg">
        <div
          onClick={() => setExpanded(!expanded)}
          className="bg-slate-900 p-2.5 flex justify-between items-center cursor-pointer hover:bg-slate-850 text-slate-200 text-[10px] font-bold"
        >
          <span className="flex items-center gap-1.5">
            <span className="text-indigo-400">{expanded ? '▼' : '▶'}</span>
            <span>Servo Driver #04 (MR-J4-100B)</span>
          </span>
          <span className="text-emerald-400">RUNNING</span>
        </div>
        {expanded && (
          <div className="p-3 bg-indigo-950/80 border-t-2 border-indigo-500 space-y-1 text-[9px] text-indigo-200">
            <div>• Rated Output: 1.0 kW (3-Phase AC 200V)</div>
            <div>• Interface: SSCNET III/H Optical Bus</div>
            <div>• Fault Code: E9 (Main circuit bus overcurrent)</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #120 Summary Row (Aggregated totals at grid footer)
const LiveSummaryRowLab = () => {
  const items = [
    { name: 'Actuator Axis A', power: 1.5, cost: 850 },
    { name: 'Actuator Axis B', power: 2.2, cost: 1200 },
    { name: 'Actuator Axis C', power: 0.75, cost: 450 },
  ];

  const totalPower = items.reduce((acc, i) => acc + i.power, 0).toFixed(2);
  const totalCost = items.reduce((acc, i) => acc + i.cost, 0);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Summary Row (Total Calc):</span>
        <span className="text-emerald-400 font-bold">Auto Aggregated</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-lg">
        <div className="p-2 space-y-1 text-[10px] text-slate-300">
          {items.map((i) => (
            <div key={i.name} className="flex justify-between">
              <span>{i.name}</span>
              <span>{i.power} kW</span>
              <span className="text-slate-400">${i.cost}</span>
            </div>
          ))}
        </div>
        <div className="bg-indigo-900/90 border-t-2 border-indigo-400 px-2.5 py-1.5 flex justify-between items-center text-[10px] font-black text-white shadow-xl">
          <span>TOTAL SUMMARY</span>
          <span className="text-emerald-300">{totalPower} kW</span>
          <span className="text-emerald-300">${totalCost}</span>
        </div>
      </div>
    </div>
  );
};

// Split Button Lab
const LiveSplitButtonDemo = () => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('Flash Firmware');

  return (
    <div className="relative inline-flex rounded-lg shadow">
      <button
        onClick={() => alert(`Executed: ${action}`)}
        className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-l-lg border-r border-indigo-700 flex items-center gap-1.5"
      >
        <Sparkles className="w-3.5 h-3.5" /> {action}
      </button>
      <button
        onClick={() => setOpen(!open)}
        className="px-2 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs rounded-r-lg"
      >
        <ChevronDown className="w-3 h-3" />
      </button>
      {open && (
        <div className="absolute top-full mt-1 right-0 bg-slate-900 border border-slate-700 rounded-lg p-1 z-30 flex flex-col gap-1 w-36 shadow-xl">
          {['Flash Firmware', 'Backup EEPROM', 'Hard Reboot'].map((item) => (
            <button
              key={item}
              onClick={() => {
                setAction(item);
                setOpen(false);
              }}
              className="px-2 py-1 text-left text-xs text-slate-300 hover:bg-indigo-600 hover:text-white rounded"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Button Group Lab
const LiveButtonGroupDemo = () => {
  const [view, setView] = useState('Graph');

  return (
    <div className="inline-flex rounded-xl p-1 bg-slate-950 border border-slate-800">
      {['Graph', 'Raw Data', 'Logs'].map((v) => (
        <button
          key={v}
          onClick={() => setView(v)}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
            view === v ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {v}
        </button>
      ))}
    </div>
  );
};

// FAB Lab
const LiveFabButtonDemo = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative w-48 h-24 bg-slate-950 border border-slate-800 rounded-xl p-2 flex items-end justify-end">
      <button
        onClick={() => {
          setClicked(true);
          setTimeout(() => setClicked(false), 1500);
        }}
        className="w-11 h-11 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold shadow-xl shadow-indigo-600/40 hover:scale-110 active:scale-95 transition"
      >
        <Plus className="w-5 h-5" />
      </button>
      {clicked && (
        <span className="absolute top-2 left-2 text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-1 rounded">
          + New Task Spawned
        </span>
      )}
    </div>
  );
};

// Button Matrix Lab
const LiveButtonMatrixDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        <button
          onClick={() => setStatus('Triggered: Primary')}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg shadow-md transition active:scale-95"
        >
          Primary
        </button>
        <button
          onClick={() => setStatus('Triggered: Secondary Outline')}
          className="px-4 py-2 border border-slate-600 hover:bg-slate-800 text-slate-200 text-xs font-bold rounded-lg transition"
        >
          Secondary
        </button>
        <button
          onClick={() => setStatus('Triggered: Destructive Action')}
          className="px-3 py-2 bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-bold rounded-lg transition"
        >
          Danger
        </button>
      </div>
      {status && <span className="text-[10px] font-mono text-indigo-400">{status}</span>}
    </div>
  );
};

// Breadcrumb Lab
const LiveBreadcrumbDemo = () => {
  const [path, setPath] = useState(['Projects', 'Delta-Arm-3', 'Kinematics']);

  return (
    <div className="flex items-center gap-1.5 bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-xs font-mono">
      {path.map((segment, idx) => (
        <React.Fragment key={segment}>
          <button
            onClick={() => setPath(path.slice(0, idx + 1))}
            className={`hover:underline ${idx === path.length - 1 ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}
          >
            {segment}
          </button>
          {idx < path.length - 1 && <span className="text-slate-600">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

// Command Palette Lab
const LiveCommandPaletteDemo = () => {
  const [q, setQ] = useState('');
  const commands = ['Reboot PLC Controller', 'Zero All Rotary Joints', 'Export Safety Logbook', 'Switch to Dark Mode'];
  const res = commands.filter((c) => c.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="w-full max-w-sm bg-slate-950 border border-indigo-500/60 rounded-xl p-2.5 shadow-2xl flex flex-col gap-2 font-mono text-xs">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <Command className="w-4 h-4 text-indigo-400" />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Type a command..."
          className="bg-transparent text-slate-100 focus:outline-none w-full"
        />
      </div>
      <div className="flex flex-col gap-1 max-h-20 overflow-y-auto">
        {res.map((c) => (
          <div key={c} className="p-1.5 rounded hover:bg-indigo-600 hover:text-white text-slate-300 cursor-pointer">
            ➔ {c}
          </div>
        ))}
      </div>
    </div>
  );
};

// Tabs Interactive Lab
const LiveTabsInteractiveDemo = () => {
  const [tab, setTab] = useState('Telemetry');

  return (
    <div className="w-full max-w-sm bg-slate-950 border border-slate-800 rounded-xl overflow-hidden text-xs">
      <div className="flex bg-slate-900 border-b border-slate-800">
        {['Telemetry', 'Motor Curves', 'Diagnostics'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 font-bold font-mono transition border-b-2 ${
              tab === t ? 'border-indigo-500 text-indigo-300 bg-slate-950' : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="p-3 text-slate-300 font-mono text-[11px]">
        {tab === 'Telemetry' && '📊 Stream: 120 packets/sec | Latency: 0.8ms'}
        {tab === 'Motor Curves' && '📈 Torque-Speed characteristic within ISO envelope.'}
        {tab === 'Diagnostics' && '✅ All 6 Joint Hall sensors operational.'}
      </div>
    </div>
  );
};

// Navigation Shell Lab
const LiveNavigationShellDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  return (
    <div className="w-full max-w-sm h-24 bg-slate-950 border border-slate-800 rounded-xl flex overflow-hidden text-xs font-mono">
      <div className="w-16 bg-slate-900 p-2 flex flex-col gap-2 border-r border-slate-800 text-[10px] text-slate-400">
        <div className="text-indigo-400 font-bold">Menu</div>
        <div>Nav 1</div>
        <div>Nav 2</div>
      </div>
      <div className="flex-1 p-3 flex flex-col justify-center">
        <span className="text-xs text-slate-200 font-bold">{term.term}</span>
        <span className="text-[10px] text-slate-500">{term.whenToUse}</span>
      </div>
    </div>
  );
};

// Resizable Split Pane Lab
const LiveResizableSplitPaneDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  const [leftWidth, setLeftWidth] = useState(40);

  return (
    <div className="w-full max-w-sm h-28 bg-slate-950 border border-slate-800 rounded-xl flex relative overflow-hidden text-xs font-mono">
      <div style={{ width: `${leftWidth}%` }} className="bg-slate-900 p-2 flex flex-col justify-center text-slate-300">
        <span className="text-[10px] font-bold">Left Pane ({leftWidth}%)</span>
      </div>
      <div
        onMouseDown={(e) => {
          const move = (ev: MouseEvent) => {
            const rect = (e.target as HTMLElement).parentElement?.getBoundingClientRect();
            if (rect) {
              const pct = Math.max(20, Math.min(80, ((ev.clientX - rect.left) / rect.width) * 100));
              setLeftWidth(Math.round(pct));
            }
          };
          const up = () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseup', up);
          };
          window.addEventListener('mousemove', move);
          window.addEventListener('mouseup', up);
        }}
        className="w-2 bg-indigo-600 hover:bg-indigo-500 cursor-col-resize flex items-center justify-center"
      >
        <div className="w-0.5 h-6 bg-white rounded" />
      </div>
      <div style={{ width: `${100 - leftWidth}%` }} className="bg-slate-950 p-2 flex flex-col justify-center text-slate-400">
        <span className="text-[10px]">Right View ({100 - leftWidth}%)</span>
      </div>
    </div>
  );
};

// Scroll Position Lab
const LiveScrollPositionDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  const [pos, setPos] = useState(0);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2">
      <div
        onScroll={(e) => setPos(Math.round((e.currentTarget.scrollTop / (e.currentTarget.scrollHeight - 96)) * 100))}
        className="w-full h-24 bg-slate-950 border border-slate-800 rounded-xl p-2 overflow-y-auto text-xs font-mono"
      >
        <div className="sticky top-0 bg-indigo-900/90 text-white px-2 py-1 rounded text-[10px] font-bold mb-2">
          📌 Sticky Header Element
        </div>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="py-1 text-slate-400 border-b border-slate-800/60 text-[10px]">
            Row item index #{i + 1}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] font-mono text-slate-400">
        <span>Scroll Depth: {pos}%</span>
        <span>Virtual Boundary Active</span>
      </div>
    </div>
  );
};

// Tree View Hierarchy Lab
const LiveTreeViewHierarchyDemo = () => {
  const [openFolder, setOpenFolder] = useState(true);

  return (
    <div className="w-full max-w-xs bg-slate-950 border border-slate-800 rounded-xl p-2.5 font-mono text-xs text-slate-300">
      <div onClick={() => setOpenFolder(!openFolder)} className="flex items-center gap-1.5 cursor-pointer text-indigo-300 font-bold">
        {openFolder ? <FolderOpen className="w-4 h-4 text-indigo-400" /> : <Folder className="w-4 h-4 text-indigo-400" />}
        <span>Firmware_Src/</span>
      </div>
      {openFolder && (
        <div className="pl-5 pt-1 space-y-1 text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5 hover:text-white cursor-pointer">
            <File className="w-3.5 h-3.5" /> <span>kinematics.c</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white cursor-pointer">
            <File className="w-3.5 h-3.5" /> <span>hal_canbus.h</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Editable Spreadsheet Lab
const LiveEditableSpreadsheetDemo = () => {
  const [cells, setCells] = useState([
    ['Joint 1', '180.0°', 'Active'],
    ['Joint 2', '-45.5°', 'Active'],
    ['Joint 3', '90.0°', 'Standby'],
  ]);

  return (
    <div className="w-full max-w-sm bg-slate-950 border border-slate-800 rounded-xl overflow-hidden font-mono text-xs">
      <div className="grid grid-cols-3 bg-slate-900 border-b border-slate-800 p-1 text-[10px] text-slate-400 font-bold">
        <span>Joint Name</span>
        <span>Target Pos</span>
        <span>Status</span>
      </div>
      {cells.map((row, r) => (
        <div key={r} className="grid grid-cols-3 border-b border-slate-800/60 p-1 text-slate-300">
          <span>{row[0]}</span>
          <input
            type="text"
            value={row[1]}
            onChange={(e) => {
              const next = [...cells];
              next[r][1] = e.target.value;
              setCells(next);
            }}
            className="bg-slate-900 px-1 rounded border border-slate-700 text-indigo-300 font-bold text-xs"
          />
          <span className="text-[10px] text-emerald-400">{row[2]}</span>
        </div>
      ))}
    </div>
  );
};

// Sortable Data Table Lab
const LiveSortableDataTableDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  const [sortAsc, setSortAsc] = useState(true);
  const data = [
    { id: 'AX-01', rpm: 3200, temp: 45 },
    { id: 'AX-02', rpm: 1800, temp: 38 },
    { id: 'AX-03', rpm: 4100, temp: 52 },
  ].sort((a, b) => (sortAsc ? a.rpm - b.rpm : b.rpm - a.rpm));

  return (
    <div className="w-full max-w-sm bg-slate-950 border border-slate-800 rounded-xl overflow-hidden font-mono text-xs">
      <div className="grid grid-cols-3 bg-slate-900 border-b border-slate-800 p-1.5 text-[10px] text-slate-400 font-bold">
        <span>Axis</span>
        <button onClick={() => setSortAsc(!sortAsc)} className="text-left text-indigo-300 flex items-center gap-1">
          RPM {sortAsc ? '▲' : '▼'}
        </button>
        <span>Temp</span>
      </div>
      {data.map((d) => (
        <div key={d.id} className="grid grid-cols-3 border-b border-slate-800/60 p-1.5 text-slate-300 text-[11px]">
          <span className="font-bold text-slate-200">{d.id}</span>
          <span className="text-indigo-400">{d.rpm} RPM</span>
          <span className="text-amber-400">{d.temp} °C</span>
        </div>
      ))}
    </div>
  );
};

// Accordion Multi Lab
const LiveAccordionMultiDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="w-full max-w-sm flex flex-col gap-1.5 font-mono text-xs">
      {['Network Configuration', 'Safety Interlocks', 'Encoder Calibration'].map((title, idx) => (
        <div key={title} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
          <button
            onClick={() => setActive(active === idx ? null : idx)}
            className="w-full p-2.5 text-left flex justify-between items-center text-slate-200 hover:bg-slate-900"
          >
            <span className="font-bold text-xs">{title}</span>
            <ChevronDown className={`w-4 h-4 text-indigo-400 transition-transform ${active === idx ? 'rotate-180' : ''}`} />
          </button>
          {active === idx && (
            <div className="p-2.5 bg-slate-900/60 text-[11px] text-slate-400 border-t border-slate-800">
              Accordion content expanded for {title}. Multi-section collapsible stack.
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Popover Tooltip Lab
const LivePopoverTooltipDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg"
      >
        <Info className="w-4 h-4" />
        <span>Hover or Tap Target</span>
      </button>
      {show && (
        <div className="absolute bottom-full mb-2 bg-slate-950 border border-indigo-500 rounded-xl p-2.5 shadow-2xl text-[11px] font-mono text-indigo-200 w-48 text-center animate-in fade-in">
          Tooltip / Popover contextual overlay element.
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950 border-r border-b border-indigo-500 rotate-45 -mt-1" />
        </div>
      )}
    </div>
  );
};

// Modal Dialog Lab
const LiveModalDialogDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl shadow-lg transition"
      >
        Launch Modal Dialog
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="w-full max-w-xs bg-slate-900 border border-slate-700 rounded-2xl p-4 flex flex-col gap-3 shadow-2xl animate-in zoom-in-95">
            <h4 className="text-sm font-bold text-white">Emergency Stop Protocol</h4>
            <p className="text-xs text-slate-400 font-mono">Disarm all high-torque drives immediately?</p>
            <div className="flex justify-end gap-2 mt-2">
              <button onClick={() => setOpen(false)} className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300">
                Cancel
              </button>
              <button onClick={() => setOpen(false)} className="px-3 py-1.5 rounded-lg bg-rose-600 text-xs font-bold text-white">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Toast & Feedback Lab
const LiveToastFeedbackDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  const [toast, setToast] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={() => {
          setToast(true);
          setTimeout(() => setToast(false), 2500);
        }}
        className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
      >
        <Bell className="w-4 h-4" /> Trigger Toast Notification
      </button>
      {toast && (
        <div className="px-3 py-2 bg-slate-950 border-l-4 border-emerald-500 border-y border-r border-slate-800 rounded-lg shadow-xl text-xs font-mono text-slate-200 flex items-center gap-2 animate-in slide-in-from-top-2">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>Axis calibration synced successfully</span>
        </div>
      )}
    </div>
  );
};

// Progress Skeleton Lab
const LiveProgressSkeletonDemo = () => {
  const [prog, setProg] = useState(68);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono">
      <div className="flex justify-between text-xs text-slate-300">
        <span>Flashing Firmware...</span>
        <span className="text-indigo-400 font-bold">{prog}%</span>
      </div>
      <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
        <div style={{ width: `${prog}%` }} className="h-full bg-indigo-600 rounded-full transition-all" />
      </div>
    </div>
  );
};

// State Matrix Lab
const LiveStateMatrixDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  return (
    <div className="grid grid-cols-3 gap-2 text-xs font-mono text-center">
      <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-400">Default</div>
      <div className="p-2 rounded bg-indigo-950 border border-indigo-500 text-indigo-300 font-bold">:hover</div>
      <div className="p-2 rounded bg-indigo-600 text-white font-bold">:active</div>
    </div>
  );
};

// Drag Drop Lab
const LiveDragDropListDemo = () => {
  const [items, setItems] = useState(['1. Homing Check', '2. Tool Clearance', '3. Cutting Feed']);

  return (
    <div className="w-full max-w-xs flex flex-col gap-1.5 font-mono text-xs">
      {items.map((it, idx) => (
        <div key={it} className="p-2 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between text-slate-200">
          <span className="font-bold">{it}</span>
          <Move className="w-3.5 h-3.5 text-indigo-400 cursor-grab" />
        </div>
      ))}
    </div>
  );
};

// Timeline Gantt Lab
const LiveTimelineGanttDemo = () => {
  return (
    <div className="w-full max-w-sm bg-slate-950 border border-slate-800 rounded-xl p-2.5 font-mono text-xs flex flex-col gap-2">
      <div className="flex justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-1">
        <span>0s</span><span>2s</span><span>4s</span><span>6s</span>
      </div>
      <div className="space-y-1.5">
        <div className="w-3/4 h-4 bg-indigo-600 rounded text-[10px] text-white px-2 flex items-center">
          Spindle Acceleration
        </div>
        <div className="w-1/2 ml-1/4 h-4 bg-emerald-600 rounded text-[10px] text-white px-2 flex items-center">
          Material Feed (2.5s)
        </div>
      </div>
    </div>
  );
};

// Canvas Diagram Lab
const LiveCanvasDiagramDemo = () => {
  return (
    <div className="w-full max-w-xs h-28 bg-slate-950 border border-slate-800 rounded-xl p-2 flex items-center justify-around relative">
      <div className="p-2 bg-indigo-900 border border-indigo-500 rounded-lg text-xs font-mono text-white">
        Input Node
      </div>
      <div className="text-indigo-400 font-bold">➔</div>
      <div className="p-2 bg-emerald-900 border border-emerald-500 rounded-lg text-xs font-mono text-white">
        PID Filter
      </div>
    </div>
  );
};

// Form Validation Lab
const LiveFormValidationDemo = () => {
  const [val, setVal] = useState('abc');
  const isValid = !isNaN(Number(val)) && Number(val) > 0;

  return (
    <div className="w-full max-w-xs flex flex-col gap-1 text-xs font-mono">
      <label className="text-slate-300 font-bold">Input Speed (Must be &gt; 0)</label>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className={`bg-slate-950 border rounded-lg px-2.5 py-1.5 text-slate-200 ${
          isValid ? 'border-emerald-500' : 'border-rose-500'
        }`}
      />
      <span className={isValid ? 'text-emerald-400 text-[10px]' : 'text-rose-400 text-[10px]'}>
        {isValid ? '✓ Valid numeric velocity' : '✕ Error: Number strictly required'}
      </span>
    </div>
  );
};

// Accessibility Token Lab
const LiveAccessibilityTokenDemo: React.FC<{ term: TermItem }> = ({ term }) => {
  return (
    <div className="flex gap-2 text-xs font-mono">
      <span className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold shadow">
        Contrast Ratio: 8.2:1 (AAA)
      </span>
    </div>
  );
};

// Code Editor Lab
const LiveCodeEditorDemo = () => {
  const [code, setCode] = useState('const rpm = 3200;\nconst powerKW = (rpm * 9.55) / 1000;');

  return (
    <div className="w-full max-w-sm bg-slate-950 border border-slate-800 rounded-xl p-2 font-mono text-xs">
      <div className="text-[10px] text-slate-500 pb-1">motor_calc.ts</div>
      <textarea
        rows={3}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full bg-slate-900 border border-slate-800 rounded p-1.5 text-indigo-300 text-xs font-mono focus:outline-none"
      />
    </div>
  );
};

// Pointer Interaction Lab
const LivePointerInteractionLab = () => {
  const [status, setStatus] = useState('Hover or Click');

  return (
    <div
      onMouseEnter={() => setStatus('Pointer Entered (Hover)')}
      onMouseLeave={() => setStatus('Pointer Left')}
      onMouseDown={() => setStatus('Pointer Pressed Down')}
      onMouseUp={() => setStatus('Pointer Released')}
      className="px-6 py-4 bg-slate-950 border-2 border-dashed border-indigo-500 rounded-xl text-xs font-mono text-indigo-300 cursor-pointer select-none"
    >
      {status}
    </div>
  );
};

// Physical Keyboard Lab
const LivePhysicalKeyboardLab = () => {
  const [key, setKey] = useState('Ctrl + S');

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      const parts = [];
      if (e.ctrlKey) parts.push('Ctrl');
      if (e.shiftKey) parts.push('Shift');
      if (e.altKey) parts.push('Alt');
      if (!['Control', 'Shift', 'Alt'].includes(e.key)) parts.push(e.key.toUpperCase());
      if (parts.length > 0) setKey(parts.join(' + '));
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <kbd className="px-3 py-1.5 bg-slate-800 border border-slate-600 rounded-lg text-xs font-mono font-black text-indigo-300 shadow-lg">
        {key}
      </kbd>
      <span className="text-[10px] font-mono text-slate-400">Press any key on physical keyboard</span>
    </div>
  );
};

// Icon Symbol Palette Lab
const LiveIconSymbolPaletteDemo = () => {
  const [sel, setSel] = useState('Terminal');

  return (
    <div className="flex gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800">
      {['Terminal', 'Shield', 'Layers', 'Sliders'].map((name) => (
        <button
          key={name}
          onClick={() => setSel(name)}
          className={`px-2.5 py-1 text-xs font-mono rounded ${
            sel === name ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:bg-slate-800'
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

// Microcopy & Hint Lab
const LiveMicrocopyHintDemo = () => {
  const [val, setVal] = useState('');

  return (
    <div className="w-full max-w-xs flex flex-col gap-1 text-xs">
      <label className="text-slate-300 font-bold">API Token Key</label>
      <input
        type="text"
        placeholder="e.g. sk-live-99201"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 font-mono"
      />
      <span className="text-[10px] text-slate-500 font-mono">💡 Never share secret tokens with untrusted clients</span>
    </div>
  );
};

// Z-Index Stack Lab
const LiveZIndexStackDemo = () => {
  return (
    <div className="relative w-full max-w-xs h-28 bg-slate-950 border border-slate-800 rounded-xl p-2 flex items-center justify-center">
      <div className="absolute w-28 h-14 bg-slate-800 rounded border border-slate-700 text-[10px] font-mono text-slate-400 flex items-center justify-center">
        Layer 0
      </div>
      <div className="relative w-36 h-16 bg-indigo-900/90 backdrop-blur border border-indigo-500 rounded-xl text-xs font-mono text-indigo-200 flex items-center justify-center shadow-2xl">
        Layer 10 (Floating)
      </div>
    </div>
  );
};

// Window Menu Bar Lab
const LiveWindowMenuBarDemo = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-full max-w-xs bg-slate-950 border border-slate-800 rounded-xl overflow-hidden text-xs">
      <div className="flex bg-slate-900 border-b border-slate-800 px-2 py-1 gap-2">
        {['File', 'Edit', 'Run'].map((m) => (
          <button
            key={m}
            onClick={() => setActive(active === m ? null : m)}
            className={`px-2 py-0.5 rounded text-xs font-semibold ${
              active === m ? 'bg-indigo-600 text-white' : 'text-slate-300'
            }`}
          >
            {m}
          </button>
        ))}
      </div>
      {active && (
        <div className="p-2 bg-slate-950 text-[11px] font-mono text-indigo-300">
          Menu [{active}] options rendered
        </div>
      )}
    </div>
  );
};

// Specialized Fallback Workbench
const LiveSpecializedFallbackWorkbench: React.FC<{ term: TermItem }> = ({ term }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
      <div className="flex justify-between items-center w-full">
        <div>
          <span className="text-xs font-bold text-slate-200 block">{term.term}</span>
          <span className="text-[10px] font-mono text-slate-400">{term.koreanName}</span>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
            toggle ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
          }`}
        >
          {toggle ? '● Active' : '○ Inactive'}
        </button>
      </div>
      <p className="text-[10px] text-slate-400 text-center font-mono">{term.whenToUse}</p>
    </div>
  );
};
