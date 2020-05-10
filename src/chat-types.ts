export interface ChatOption {
  delay?: number;
}

export interface Message<C> {
  type: string;
  content: C;
  self: boolean;
  username?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface TextMessage extends Message<string> {
  type: 'text';
  content: string;
}

export interface JSXMessage extends Message<JSX.Element> {
  type: 'jsx';
  content: JSX.Element;
}

export interface ActionRequest {
  type: string;
  always?: boolean;
  addMessage?: boolean;
  response?: ActionResponse;
}

export interface TextActionRequest extends ActionRequest {
  type: 'text';
  defaultValue?: string;
  placeholder?: string;
  sendButtonText?: string;
  response?: TextActionResponse;
}

export interface SelectActionRequest extends ActionRequest {
  type: 'select';
  options: {
    value: string;
    text: string;
  }[];
  response?: SelectActionResponse;
}

export interface MultiSelectActionRequest extends ActionRequest {
  type: 'multi-select';
  options: {
    value: string;
    text: string;
  }[];
  sendButtonText?: string;
  response?: MultiSelectActionResponse;
}

export interface FileActionRequest extends ActionRequest {
  type: 'file';
  accept?: string;
  multiple?: boolean;
  response?: FileActionResponse;
  sendButtonText?: string;
}

export interface AudioActionRequest extends ActionRequest {
  type: 'audio';
  sendButtonText?: string;
  response?: AudioActionResponse;
}

export interface ActionResponse {
  type: string;
  value: string;
  error?: Error;
}

export interface TextActionResponse extends ActionResponse {
  type: 'text';
}

export interface SelectActionResponse extends ActionResponse {
  type: 'select';
  option: {
    value: string;
    text: string;
  };
}

export interface MultiSelectActionResponse extends ActionResponse {
  type: 'multi-select';
  options: {
    value: string;
    text: string;
  }[];
}

export interface FileActionResponse extends ActionResponse {
  type: 'file';
  files: File[];
}

export interface AudioActionResponse extends ActionResponse {
  type: 'audio';
  audio?: Blob;
}

export interface OnMessagesChanged {
  (messages: Message<unknown>[]): void;
}

export interface OnActionChanged {
  (request: ActionRequest, response?: ActionResponse): void;
}

export interface OnActionResponsed {
  (response: ActionResponse): void;
}