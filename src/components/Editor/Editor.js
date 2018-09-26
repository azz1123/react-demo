import React from "react";
import * as umeditorUtils from './umeditorUtils';
import umeditorConfig from './umeditorConfig';

class Editor extends React.Component {
  static defaultProps = {
    className: "",
    config: {},
    content: "",
    disabled: false,
    autoWidth: false,
    defaultValue: "",
  };

  constructor(props) {
    super(props);
    this.editor = {};
    this.id = this.props.id;
    this.config = this.mergeConfig();
  }

  init = () => {
    this.editor = umeditorUtils.getEditor(this.id, this.config);

    this.getContent()
  };

  mergeConfig = () => {
    const {config} = this.props;
    this.config = Object.assign({}, umeditorConfig, config);
    return this.config
  };

  getContent = () => {
    const content = umeditorUtils.getContent(this.editor);
    return content
  };

  onChange = () => {
    const {onChange} = this.props;
    const content = umeditorUtils.getContent(this.editor);
    return onChange && onChange(this.getContent());
  }

  /**
   * 销毁编辑器
   */
  destroy = () => {
    umeditorUtils.destroy(this.editor)
  };

  componentDidMount() {
    this.init();
    this.editor.addListener("selectionchange", this.onChange)
  }

  componentWillUnmount() {
    // 组件卸载后，清除放入库的id
    this.destroy()
  }

  render() {
    const {className} = this.props;
    return (
      <div>
        <script className={`Editor ${className}`} id={this.id} type="text/plain" onChange={() => this.getContent()}/>
      </div>
    );
  }

}

export default Editor;