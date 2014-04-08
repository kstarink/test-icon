var Montage=require("../../core").Montage,Malker=require("mousse/serialization/malker").Malker,Serializer=require("mousse/serialization/serializer").Serializer,MontageBuilder=require("./montage-builder").MontageBuilder,MontageLabeler=require("./montage-labeler").MontageLabeler,MontageVisitor=require("./montage-visitor").MontageVisitor,logger=require("../../logger").logger("montage-serializer"),MontageSerializer=Montage.specialize.call(Serializer,{_require:{value:null},_visitor:{value:null},_units:{value:Object.create(null)},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(e,t){return t.toUpperCase()}},constructor:{value:function MontageSerializer(){}},initWithRequire:{value:function(e){return this._require=e,this._builder=new MontageBuilder,this._labeler=new MontageLabeler,this._visitor=(new MontageVisitor).initWithBuilderAndLabelerAndRequireAndUnits(this._builder,this._labeler,this._require,this._units),this._malker=new Malker(this._visitor),this}},getExternalObjects:{value:function(){return this._visitor.getExternalObjects()}},getExternalElements:{value:function(){return this._visitor.getExternalElements()}},defineSerializationUnit:{value:function(e,t){this.constructor.defineSerializationUnit.call(this,e,t)}}},{defineSerializationUnit:{value:function(e,t){this._units[e]=t}},getDefaultObjectNameForModuleId:{value:function(e){return this._findObjectNameRegExp.test(e),RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase)}}});exports.MontageSerializer=MontageSerializer,exports.serialize=function(e,t){return(new MontageSerializer).initWithRequire(t).serializeObject(e)};