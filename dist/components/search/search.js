Component({
  properties: {
    isOval: {
      type: Boolean,
      value: true,
    },
    showSearchText: {
      type: Boolean,
      value: false,
    },
    maxlength: {
      type: Number,
      value: 140
    },
    delay: {
      type: Number,
      value: 500
    },
    placeholder: String,
    value: String,
    auto: {
      type: Boolean,
      value: false
    },
    focus: {
      type: Boolean,
      value: false
    },
    showClear: {
      type: Boolean,
      value: true
    },
    disabled: {
      type: Boolean,
      value: false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    clearIconVisible: false
  },

  timer: null,

  ready() {
    const { showClear } = this.properties;
    const { value } = this.data;

    if (!showClear) {
      return;
    }

    this.setData({
      clearIconVisible: !!value
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInput({ detail: { value } }) {
      let { auto, showClear } = this.properties;
      const state = { value };

      if (showClear) {
        state.clearIconVisible = !!value;
      }

      this.setData(state);

      if (auto) {
        this._delay();
      }
    },

    handleCancel() {
      this.setData({
        value: "",
        clearIconVisible: false
      });

      this.triggerEvent("cancel");
    },

    handleSearch() {
      const { value } = this.data;

      this.triggerEvent("confirm", value);
    },

    _delay() {
      const { delay } = this.properties;

      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.handleSearch();
      }, delay);
    },

    handleFocus() {
      const { value } = this.data;

      this._updateClearState(!!value);
      this.triggerEvent("focus", value);
    },

    handleBlur() {
      const { value } = this.data;

      this._hideClearIcon();
      this.triggerEvent("blur", value);
    },

    handleClear() {
      this.handleCancel();
    },

    _updateClearState(visible) {
      const { showClear } = this.properties;

      if (!showClear) {
        return;
      }

      this.setData({
        clearIconVisible: visible
      });
    },

    _showClearIcon() {
      this._updateClearState(true);
    },

    _hideClearIcon() {
      this._updateClearState(false);
    }
  }
});
