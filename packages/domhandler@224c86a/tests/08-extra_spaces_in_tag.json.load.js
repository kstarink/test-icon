montageDefine("224c86a","tests/08-extra_spaces_in_tag.json",{exports:{name:"Extra spaces in tag",options:{handler:{},parser:{}},html:"<\n font	\n size='14' \n>the text<\n /	\nfont	 \n>",expected:[{type:"tag",name:"font",attribs:{size:"14"},children:[{data:"the text",type:"text"}]}]}});