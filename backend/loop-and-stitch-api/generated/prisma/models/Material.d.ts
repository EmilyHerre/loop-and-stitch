import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MaterialModel = runtime.Types.Result.DefaultSelection<Prisma.$MaterialPayload>;
export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null;
    _avg: MaterialAvgAggregateOutputType | null;
    _sum: MaterialSumAggregateOutputType | null;
    _min: MaterialMinAggregateOutputType | null;
    _max: MaterialMaxAggregateOutputType | null;
};
export type MaterialAvgAggregateOutputType = {
    id: number | null;
};
export type MaterialSumAggregateOutputType = {
    id: number | null;
};
export type MaterialMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    type: string | null;
    unit: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MaterialMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    type: string | null;
    unit: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MaterialCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    unit: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MaterialAvgAggregateInputType = {
    id?: true;
};
export type MaterialSumAggregateInputType = {
    id?: true;
};
export type MaterialMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    unit?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MaterialMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    unit?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MaterialCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    unit?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MaterialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    cursor?: Prisma.MaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MaterialCountAggregateInputType;
    _avg?: MaterialAvgAggregateInputType;
    _sum?: MaterialSumAggregateInputType;
    _min?: MaterialMinAggregateInputType;
    _max?: MaterialMaxAggregateInputType;
};
export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
    [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMaterial[P]> : Prisma.GetScalarType<T[P], AggregateMaterial[P]>;
};
export type MaterialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithAggregationInput | Prisma.MaterialOrderByWithAggregationInput[];
    by: Prisma.MaterialScalarFieldEnum[] | Prisma.MaterialScalarFieldEnum;
    having?: Prisma.MaterialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MaterialCountAggregateInputType | true;
    _avg?: MaterialAvgAggregateInputType;
    _sum?: MaterialSumAggregateInputType;
    _min?: MaterialMinAggregateInputType;
    _max?: MaterialMaxAggregateInputType;
};
export type MaterialGroupByOutputType = {
    id: number;
    name: string;
    type: string;
    unit: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MaterialCountAggregateOutputType | null;
    _avg: MaterialAvgAggregateOutputType | null;
    _sum: MaterialSumAggregateOutputType | null;
    _min: MaterialMinAggregateOutputType | null;
    _max: MaterialMaxAggregateOutputType | null;
};
export type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MaterialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MaterialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MaterialGroupByOutputType[P]>;
}>>;
export type MaterialWhereInput = {
    AND?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    OR?: Prisma.MaterialWhereInput[];
    NOT?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    id?: Prisma.IntFilter<"Material"> | number;
    name?: Prisma.StringFilter<"Material"> | string;
    type?: Prisma.StringFilter<"Material"> | string;
    unit?: Prisma.StringFilter<"Material"> | string;
    createdAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    patterns?: Prisma.PatternMaterialListRelationFilter;
};
export type MaterialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patterns?: Prisma.PatternMaterialOrderByRelationAggregateInput;
};
export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    OR?: Prisma.MaterialWhereInput[];
    NOT?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    name?: Prisma.StringFilter<"Material"> | string;
    type?: Prisma.StringFilter<"Material"> | string;
    unit?: Prisma.StringFilter<"Material"> | string;
    createdAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    patterns?: Prisma.PatternMaterialListRelationFilter;
}, "id">;
export type MaterialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MaterialCountOrderByAggregateInput;
    _avg?: Prisma.MaterialAvgOrderByAggregateInput;
    _max?: Prisma.MaterialMaxOrderByAggregateInput;
    _min?: Prisma.MaterialMinOrderByAggregateInput;
    _sum?: Prisma.MaterialSumOrderByAggregateInput;
};
export type MaterialScalarWhereWithAggregatesInput = {
    AND?: Prisma.MaterialScalarWhereWithAggregatesInput | Prisma.MaterialScalarWhereWithAggregatesInput[];
    OR?: Prisma.MaterialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MaterialScalarWhereWithAggregatesInput | Prisma.MaterialScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Material"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    unit?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Material"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Material"> | Date | string;
};
export type MaterialCreateInput = {
    name: string;
    type: string;
    unit: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patterns?: Prisma.PatternMaterialCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateInput = {
    id?: number;
    name: string;
    type: string;
    unit: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patterns?: Prisma.PatternMaterialUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patterns?: Prisma.PatternMaterialUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patterns?: Prisma.PatternMaterialUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialCreateManyInput = {
    id?: number;
    name: string;
    type: string;
    unit: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaterialUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaterialAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MaterialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaterialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaterialSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MaterialScalarRelationFilter = {
    is?: Prisma.MaterialWhereInput;
    isNot?: Prisma.MaterialWhereInput;
};
export type MaterialCreateNestedOneWithoutPatternsInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutPatternsInput, Prisma.MaterialUncheckedCreateWithoutPatternsInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutPatternsInput;
    connect?: Prisma.MaterialWhereUniqueInput;
};
export type MaterialUpdateOneRequiredWithoutPatternsNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutPatternsInput, Prisma.MaterialUncheckedCreateWithoutPatternsInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutPatternsInput;
    upsert?: Prisma.MaterialUpsertWithoutPatternsInput;
    connect?: Prisma.MaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MaterialUpdateToOneWithWhereWithoutPatternsInput, Prisma.MaterialUpdateWithoutPatternsInput>, Prisma.MaterialUncheckedUpdateWithoutPatternsInput>;
};
export type MaterialCreateWithoutPatternsInput = {
    name: string;
    type: string;
    unit: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaterialUncheckedCreateWithoutPatternsInput = {
    id?: number;
    name: string;
    type: string;
    unit: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaterialCreateOrConnectWithoutPatternsInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutPatternsInput, Prisma.MaterialUncheckedCreateWithoutPatternsInput>;
};
export type MaterialUpsertWithoutPatternsInput = {
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutPatternsInput, Prisma.MaterialUncheckedUpdateWithoutPatternsInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutPatternsInput, Prisma.MaterialUncheckedCreateWithoutPatternsInput>;
    where?: Prisma.MaterialWhereInput;
};
export type MaterialUpdateToOneWithWhereWithoutPatternsInput = {
    where?: Prisma.MaterialWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutPatternsInput, Prisma.MaterialUncheckedUpdateWithoutPatternsInput>;
};
export type MaterialUpdateWithoutPatternsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialUncheckedUpdateWithoutPatternsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialCountOutputType = {
    patterns: number;
};
export type MaterialCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patterns?: boolean | MaterialCountOutputTypeCountPatternsArgs;
};
export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialCountOutputTypeSelect<ExtArgs> | null;
};
export type MaterialCountOutputTypeCountPatternsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternMaterialWhereInput;
};
export type MaterialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    unit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patterns?: boolean | Prisma.Material$patternsArgs<ExtArgs>;
    _count?: boolean | Prisma.MaterialCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    unit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    unit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    unit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MaterialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "type" | "unit" | "createdAt" | "updatedAt", ExtArgs["result"]["material"]>;
export type MaterialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patterns?: boolean | Prisma.Material$patternsArgs<ExtArgs>;
    _count?: boolean | Prisma.MaterialCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MaterialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MaterialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Material";
    objects: {
        patterns: Prisma.$PatternMaterialPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        type: string;
        unit: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["material"]>;
    composites: {};
};
export type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MaterialPayload, S>;
export type MaterialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MaterialCountAggregateInputType | true;
};
export interface MaterialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Material'];
        meta: {
            name: 'Material';
        };
    };
    findUnique<T extends MaterialFindUniqueArgs>(args: Prisma.SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MaterialFindFirstArgs>(args?: Prisma.SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MaterialFindManyArgs>(args?: Prisma.SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MaterialCreateArgs>(args: Prisma.SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MaterialCreateManyArgs>(args?: Prisma.SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MaterialDeleteArgs>(args: Prisma.SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MaterialUpdateArgs>(args: Prisma.SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MaterialDeleteManyArgs>(args?: Prisma.SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MaterialUpdateManyArgs>(args: Prisma.SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MaterialUpsertArgs>(args: Prisma.SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MaterialCountArgs>(args?: Prisma.Subset<T, MaterialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MaterialCountAggregateOutputType> : number>;
    aggregate<T extends MaterialAggregateArgs>(args: Prisma.Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>;
    groupBy<T extends MaterialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MaterialGroupByArgs['orderBy'];
    } : {
        orderBy?: MaterialGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MaterialFieldRefs;
}
export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patterns<T extends Prisma.Material$patternsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material$patternsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MaterialFieldRefs {
    readonly id: Prisma.FieldRef<"Material", 'Int'>;
    readonly name: Prisma.FieldRef<"Material", 'String'>;
    readonly type: Prisma.FieldRef<"Material", 'String'>;
    readonly unit: Prisma.FieldRef<"Material", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Material", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Material", 'DateTime'>;
}
export type MaterialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where: Prisma.MaterialWhereUniqueInput;
};
export type MaterialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where: Prisma.MaterialWhereUniqueInput;
};
export type MaterialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    cursor?: Prisma.MaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
export type MaterialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    cursor?: Prisma.MaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
export type MaterialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    cursor?: Prisma.MaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
export type MaterialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaterialCreateInput, Prisma.MaterialUncheckedCreateInput>;
};
export type MaterialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MaterialCreateManyInput | Prisma.MaterialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MaterialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    data: Prisma.MaterialCreateManyInput | Prisma.MaterialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MaterialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaterialUpdateInput, Prisma.MaterialUncheckedUpdateInput>;
    where: Prisma.MaterialWhereUniqueInput;
};
export type MaterialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MaterialUpdateManyMutationInput, Prisma.MaterialUncheckedUpdateManyInput>;
    where?: Prisma.MaterialWhereInput;
    limit?: number;
};
export type MaterialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaterialUpdateManyMutationInput, Prisma.MaterialUncheckedUpdateManyInput>;
    where?: Prisma.MaterialWhereInput;
    limit?: number;
};
export type MaterialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateInput, Prisma.MaterialUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MaterialUpdateInput, Prisma.MaterialUncheckedUpdateInput>;
};
export type MaterialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where: Prisma.MaterialWhereUniqueInput;
};
export type MaterialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialWhereInput;
    limit?: number;
};
export type Material$patternsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
    where?: Prisma.PatternMaterialWhereInput;
    orderBy?: Prisma.PatternMaterialOrderByWithRelationInput | Prisma.PatternMaterialOrderByWithRelationInput[];
    cursor?: Prisma.PatternMaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternMaterialScalarFieldEnum | Prisma.PatternMaterialScalarFieldEnum[];
};
export type MaterialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
};
